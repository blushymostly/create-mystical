// priority: 9999

// Java imports
const Registry = Java.loadClass("net.minecraft.core.Registry"); // registries, needed for almost everything involving Java classes
const TagKey = Java.loadClass("net.minecraft.tags.TagKey");
const AxisDirection = Java.loadClass("net.minecraft.core.Direction$AxisDirection");

const Random = Java.loadClass("java.util.Random")
const InputItem = Java.loadClass("dev.latvian.mods.kubejs.item.InputItem")
const OutputItem = Java.loadClass("dev.latvian.mods.kubejs.item.OutputItem")
const InputFluid = Java.loadClass("dev.latvian.mods.kubejs.fluid.InputFluid")
const OutputFluid = Java.loadClass("dev.latvian.mods.kubejs.fluid.OutputFluid")
const FluidStackJS = Java.loadClass("dev.latvian.mods.kubejs.fluid.FluidStackJS")
const JsonObject = Java.loadClass("com.google.gson.JsonObject")

const Level = Java.loadClass("net.minecraft.world.level.Level") // For some reason, Kubejs requires that you load this class to create explosions that damage blocks

const colours = ["white", "orange", "magenta", "light_blue", "lime", "pink", "purple", "light_gray", "gray", "cyan", "brown", "green", "blue", "red", "black", "yellow"]
const native_metals = ["iron", "zinc", "lead", "copper", "nickel", "gold"]

const wood_types = ["minecraft:oak", "minecraft:spruce", "minecraft:birch", "minecraft:jungle", "minecraft:acacia", "minecraft:dark_oak", "minecraft:mangrove", "minecraft:cherry", "minecraft:crimson", "minecraft:warped"]

// None of the modded axes are registered for some reason
const unregistered_axes = ["ae2:certus_quartz_axe", "ae2:nether_quartz_axe", "ae2:fluix_axe", "tconstruct:hand_axe", "tconstruct:mattock", "tconstruct:broad_axe", "thermal:flux_saw"]

const donutCraft = (event, output, center, ring) => {
    return event.shaped(output, [
        "SSS",
        "SCS",
        "SSS"
    ], {
        C: center,
        S: ring
    })
}

/** Used in datapack events instead of recipe events */
const addChiselingRecipe = (event, id, items, overwrite) => {
    const json = {
        type: "rechiseled:chiseling",
        entries: [],
        overwrite: !!overwrite
    }
    items.forEach(item=>{
        json.entries.push({
            item: item
        })
    })
    event.addJson(id, json)
}

const getPreferredItemFromTag = (tag) => {
    /* Tried using mantle for this and it didn't work on first launch unfortunately */
    // return Item.of(ItemOutput.fromTag(TagKey.create(Registry.ITEM_REGISTRY, tag), 1).get()).getId();
    /* Create a copy of the mantle preferred mods list */
    const preferredMods = ["minecraft", "create", "alloyed", "createdeco", "createaddition", "createbigcannons", "create_dd", "thermal", "tconstruct", "tmechworks"];
    const tagItems = Ingredient.of("#" + tag).itemIds;
    for (let i = 0;i < preferredMods.length;++i) { let modId = preferredMods[i];
        for (let j = 0;j < tagItems.length;++j) { let itemId = tagItems[j];
            if (itemId.split(":")[0] === modId) {
                return itemId;
            }
        }
    }
    if (tagItems.length > 0) {
        return tagItems[0];
    }
    return "minecraft:air";
}

/** Used in a datapack event to remove a configured feature by its resource location */
const removeFeature = function(event, featureName) {
    featureName = featureName.split(":")
    let namespace = featureName[0]
    let identifier = featureName[1]
    event.addJson(`${namespace}:worldgen/configured_feature/${identifier}`, {
        "type": "minecraft:no_op",
        "config": {}
    })
}

const addOregenOverworld = function(event, featureName, blockName, heightType, heightMin, heightMax, veinCount, veinSize, discardChanceOnAirExposure) {
    featureName = featureName.split(":")
    let namespace = featureName[0]
    let identifier = featureName[1]

    blockName = blockName.split(":")
    let blockNamespace = blockName[0]
    let blockIdentifier = blockName[1]

    event.addJson(`${namespace}:worldgen/configured_feature/${identifier}`, {
        "type": "minecraft:ore",
        "config": {
            "discard_chance_on_air_exposure": discardChanceOnAirExposure,
            "size": veinSize,
            "targets": [
                {
                    "state": {"Name": `${blockNamespace}:${blockIdentifier}`},
                    "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:stone_ore_replaceables"}
                },
                {
                    "state": {"Name": `${blockNamespace}:deepslate_${blockIdentifier}`},
                    "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:deepslate_ore_replaceables"}
                }
            ]
        }
    })
    let minInclusive = {"absolute": heightMin}
    let maxInclusive = {"absolute": heightMax}
    // EMI Oregen will display more useful information if we change to using Above Bottom where it makes sense to
    if (heightMin < -64) {
        minInclusive = {"above_bottom": heightMin + 64}
        maxInclusive = {"above_bottom": heightMax + 64}
    } else if (heightMax > 320) {
        minInclusive = {"below_top": -(heightMin - 320)}
        maxInclusive = {"below_top": -(heightMax - 320)}
    }
}