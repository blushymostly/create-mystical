// priority: 1
ServerEvents.recipes(event => {
    // casing recipe changes
    let tweak_casing = (name, mats) => {
        event.remove({ output: name + "_casing"})
        event.shapeless(Item.of(name + "_casing", 2), mats)
    }

    tweak_casing("create:andesite", ["create:andesite_alloy", "#minecraft:logs"])
    tweak_casing("create:copper", ["create:copper_sheet", "#minecraft:logs"])
    tweak_casing("create:railway", ["create:golden_sheet", "minecraft:deepslate"])
    tweak_casing("create:brass", ["create:brass_sheet", "#minecraft:logs"])
    tweak_casing("kubejs:zinc", ["create:zinc_ingot", "minecraft:stone"])
    tweak_casing("kubejs:lead", ["thermal:lead_plate", "minecraft:deepslate"])
    tweak_casing("kubejs:invar", ["thermal:invar_ingot", "minecraft:stone"])
    tweak_casing("kubejs:enderium", ["minecraft:ender_pearl", "minecraft:obsidian"])
    tweak_casing("kubejs:fluix", ["thermal:lead_plate", "minecraft:blackstone"])
    // tweak_casing('alloyed:steel', ["alloyed:steel_sheet", '#minecraft:logs'])
    tweak_casing("create:refined_radiance", ["create:refined_radiance", "#minecraft:logs"])
    tweak_casing("create:shadow_steel", ["create:shadow_steel", "#minecraft:logs"])
    // recipe changes
    event.replaceInput({ id: "create:crafting/kinetics/adjustable_chain_gearshift" }, "create:electron_tube", "minecraft:redstone")
    event.replaceInput({ id: "create:crafting/kinetics/rope_pulley" }, "#forge:wool", "#supplementaries:ropes")

})