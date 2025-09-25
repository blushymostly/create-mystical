// priority: 0

const BlockStateProperties = Java.loadClass("net.minecraft.world.level.block.state.properties.BlockStateProperties");

// Textures must use the 'mystical' namespace to avoid a bug involving kubejs loading textures from resource packs.
// Textures must also be stored in a resource pack since the kubejs assets folder cannot be overridden using resource packs for whatever reason

StartupEvents.registry("block", event => {

    event.create("trial_copper_block").model("minecraft:block/copper_block").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_cut_copper").model("minecraft:block/cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_chiseled_copper").model("trials:block/chiseled_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_copper_grate").model("trials:block/copper_grate").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0).notSolid().waterlogged()
    event.create("trial_cut_copper_stairs", "stairs").textureAll("minecraft:block/cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_cut_copper_slab", "slab").textureAll("minecraft:block/cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)

    event.create("trial_exposed_copper").model("minecraft:block/exposed_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_exposed_cut_copper").model("minecraft:block/exposed_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_chiseled_copper_exposed").model("trials:block/chiseled_copper_exposed").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_copper_grate_exposed").model("trials:block/copper_grate_exposed").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0).notSolid().waterlogged()
    event.create("trial_exposed_cut_copper_stairs", "stairs").textureAll("minecraft:block/exposed_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_exposed_cut_copper_slab", "slab").textureAll("minecraft:block/exposed_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)

    event.create("trial_weathered_copper").model("minecraft:block/weathered_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_weathered_cut_copper").model("minecraft:block/weathered_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_chiseled_copper_weathered").model("trials:block/chiseled_copper_weathered").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_copper_grate_weathered").model("trials:block/copper_grate_weathered").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0).notSolid().waterlogged()
    event.create("trial_weathered_cut_copper_stairs", "stairs").textureAll("minecraft:block/weathered_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_weathered_cut_copper_slab", "slab").textureAll("minecraft:block/weathered_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)

    event.create("trial_oxidized_copper").model("minecraft:block/oxidized_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_oxidized_cut_copper").model("minecraft:block/oxidized_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_chiseled_copper_oxidized").model("trials:block/chiseled_copper_oxidized").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_copper_grate_oxidized").model("trials:block/copper_grate_oxidized").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0).notSolid().waterlogged()
    event.create("trial_oxidized_cut_copper_stairs", "stairs").textureAll("minecraft:block/oxidized_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)
    event.create("trial_oxidized_cut_copper_slab", "slab").textureAll("minecraft:block/oxidized_cut_copper").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("needs_stone_tool").requiresTool(true).hardness(3.0).resistance(6.0)

    event.create("enderium_casing").model("mystical:block/enderium_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(4.0).displayName("Ender Casing")
    event.create("lead_casing").textureAll("mystical:block/lead_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Lead Casing")
    event.create("zinc_casing").textureAll("mystical:block/zinc_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Zinc Casing")
    event.create("invar_casing").textureAll("mystical:block/invar_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Invar Casing")
    event.create("fluix_casing").textureAll("mystical:block/fluix_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Fluix Casing")

    event.create("computation_matrix").model("mystical:block/computation_matrix").soundType("lantern").hardness(0.1).displayName("Computation Matrix").fullBlock(false).notSolid().box(1,1,1,15,15,15).waterlogged().opaque(false).lightLevel(7).renderType("translucent")
        .item(i=>{i.rarity("uncommon")})

    // event.create("ponder_laser_lamp").model("mystical:block/ponder_laser_lamp").notSolid().renderType("translucent").displayName("Laser Lamp (For Ponder)")
    // event.create("ponder_laser_lamp_on").model("mystical:block/ponder_laser_lamp_on").notSolid().lightLevel(15).renderType("translucent").displayName("Laser Lamp (For Ponder)")
    event.create("navigation_computer", "cardinal").model("mystical:block/navigation_computer").soundType("metal").tagBlock("mineable/pickaxe").hardness(3.0).requiresTool(true).displayName("Navigation Computer")
    event.create("lander_deployer", "cardinal").model("mystical:block/lander_deployer").soundType("metal").tagBlock("mineable/pickaxe").hardness(3.0).requiresTool(true).displayName("Lander Deployer")

    let machine = (name, layer) => {
        let id = name.toLowerCase()
        return event.create(id + "_machine", "cardinal")
            .model("mystical:block/" + id + "_machine")
            .soundType("lantern")
            .hardness(3.0)
            .tagBlock("mineable/pickaxe")
            .requiresTool(true)
            .displayName(name + " Machine")
            .notSolid()
            .renderType(layer)
            .redstoneConductor(false)
            .tagBlock("create:wrench_pickup")
            .defaultState(blockState =>{
                blockState.set(BlockStateProperties.HORIZONTAL_FACING, "south")
            })
    }

    machine("Andesite", "solid").tagBlock("mineable/axe").box(0, 0, 3, 16, 16, 16).box(3, 14, 3, 13, 18, 17)
    machine("Brass", "translucent").tagBlock("mineable/axe").box(0, 0, 0, 16, 4, 16).box(0, 0, 3, 16, 10, 13).box(8, 3, 4, 16, 16, 16).box(1, 10, 5, 7, 21, 11)
    machine("Copper", "cutout").tagBlock("mineable/axe").box(0, 0, 0, 16, 4, 16).box(1.9, 2, -2, 14.9, 10, 10).box(6, 4, 6, 16, 20, 16).box(0, 4, 6, 10, 24, 16)
    machine("Gold", "solid").tagBlock("mineable/axe").box(0, 0, 0, 16, 3, 16).box(0, 3, 0, 12, 16, 8).box(0, 3, 8, 10, 14, 16).box(12, 3, 1, 16, 10, 16)
    machine("Lead", "cutout").box(0, 0, 1, 16, 2, 15).box(1, 2, 7, 14, 14, 15).box(0, 2, 0, 7, 9, 12).box(10, 0, 8, 16, 11, 16).box(7.5, 14, 8.5, 12.5, 21, 13.5)
    machine("Zinc", "cutout")
    machine("Enderium", "cutout")

    let pot = function (name) {
        let id = name.toLowerCase().split(" ").join("_")
        return event.create(id, "cardinal")
            .model(`mystical:block/${id}`)
            .notSolid()
            .renderType("translucent")
            .displayName(name)
            .hardness(0)
            .material("COLOR_ORANGE") // Set a material (affects the sounds and some properties)
            .soundType("glass")
            .waterlogged()
    }

    pot("Treasure Pot").box(4, 0, 4, 12, 10, 12)
    pot("Tall Treasure Pot").box(5, 0, 5, 11, 12, 11)
    pot("Small Treasure Pot").box(5, 0, 5, 11, 8, 11)
    pot("Small Quartz Treasure Pot").box(5, 0, 5, 11, 8, 11)
    pot("Tall Quartz Treasure Pot").box(5, 0, 5, 11, 12, 11)

    let alchemyBlockBase = (c1, c2, id, name, model) => {
        let block = event.create(id)
            .soundType("glass")
            .color(0, c1)
            .color(1, c2)
            .hardness(0.1)
            .model(model)
            .displayName(name)
            .renderType("cutout")
            .material("glass")
            .waterlogged()
        block.item(e => e
            .color(0, c1)
            .color(1, c2)
        )
        return block
    }

    let substrateblock = (c1, c2, id, name, model) => {
        return alchemyBlockBase(c1, c2, id, name, model).box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
    }

    let acceleratorBlock = (c1, id, name, model) => {
        return alchemyBlockBase(c1, 0, id, name, model).box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
    }

    for (let i = 0; i < 15; i++)
        substrateblock(0x394867, 0x14274E, `failed_alchemy_${i}`, "Mundane Alchemic Blend", "mystical:block/mundane_substrate")

    global.substrates = []
    global.substrate_mapping = {}
    let current_category = []
    let category_index = 0
    let substrate_index = 0

    let category = () => {
        global.substrates.push(current_category)
        current_category = []
        category_index++
        substrate_index = 0
    }

    let createSubstrate = (c1, c2, id, name, model, ingredient, outputItem) => {
        global.substrate_mapping[id] = {
            category: category_index,
            index: substrate_index,
            name: name.replace(" Reagent", "").replace(" Catalyst", "")
        }
        current_category.push({
            id: `kubejs:substrate_${id}`,
            ingredient: ingredient,
            outputItem: outputItem
        })
        let substrate = substrateblock(c1, c2, `substrate_${id}`, name, "mystical:block/" + model)

        substrate_index++
        return substrate
    }

    let reagent = (c1, c2, id, prefix, ingredient, outputItem) => {
        return createSubstrate(c1, c2, id, `${prefix} Reagent`, "substrate", ingredient, outputItem)
    }
    let catalyst = (c1, c2, id, prefix, ingredient) => {
        let substrate = createSubstrate(c1, c2, id, `${prefix} Catalyst`, "catalyst", ingredient)
        substrate.item(item=>{item.rarity("uncommon")})
        return substrate
    }

    reagent(0x5F5F5F, 0x8E8E8E, "andesite", "Andesite", "minecraft:andesite")
    reagent(0x7F7F7F, 0xD4D4D4, "diorite", "Diorite", "minecraft:diorite")
    reagent(0x563A2F, 0x9A6C5B, "granite", "Granite", "minecraft:granite")
    reagent(0x585858, 0x646363, "cobblestone", "Stone", "minecraft:cobblestone")
    reagent(0x32333D, 0x5C5C5C, "basalt", "Basalt", "minecraft:basalt")
    reagent(0x6B5D4F, 0x7D6B5A, "scoria", "Scoria", "create:scoria")
    category()
    reagent(0xD30000, 0xB80F0A, "red", "Crimson", ["minecraft:rose_bush", "minecraft:poppy", "minecraft:red_tulip"], "minecraft:red_dye")
    reagent(0xFC6600, 0xb1560f, "orange", "Orange", ["minecraft:orange_tulip", "biomesoplenty:burning_blossom", "minecraft:pumpkin"], "minecraft:orange_dye")
    reagent(0xFFF200, 0xdba520, "yellow", "Goldenrod", ["biomesoplenty:goldenrod", "minecraft:sunflower", "minecraft:dandelion"], "minecraft:yellow_dye")
    reagent(0x9dc183, 0x708238, "green", "Olive", ["minecraft:fern", "minecraft:cactus", "biomesoplenty:watergrass"], "minecraft:green_dye")
    reagent(0x57a0d2, 0x0080fe, "blue", "Azure", ["biomesoplenty:blue_hydrangea", "minecraft:cornflower", "minecraft:blue_orchid"], "minecraft:light_blue_dye")
    reagent(0xb200ed, 0xff66cc, "magenta", "Fuchsia", ["minecraft:lilac", "minecraft:allium", "minecraft:pink_tulip"], "minecraft:magenta_dye")
    category()
    reagent(0xAC3B00, 0xD5AC26, "blaze", "Blazing", "minecraft:blaze_powder")
    reagent(0x4F7E48, 0x8AD480, "slime", "Slime", "minecraft:slime_ball")
    reagent(0x5B151A, 0xBC3E49, "nether", "Nether", "minecraft:nether_wart")
    reagent(0x05030A, 0x36234C, "obsidian", "Obsidian", "#forge:dusts/obsidian", "create:powdered_obsidian")
    reagent(0x535353, 0x717171, "gunpowder", "Gunpowder", "minecraft:gunpowder")
    reagent(0x529680, 0xA2CFC0, "prismarine", "Aquatic", "minecraft:prismarine_shard")
    category()
    reagent(0x8F5CCB, 0xBE8EF4, "fluix", "Fluix", "ae2:fluix_dust", "ae2:fluix_dust")
    reagent(0x27A9BB, 0x2CC7C9, "apatite", "Apatite", "#forge:dusts/apatite", "thermal:apatite_dust")
    reagent(0xC7A94A, 0xEEF071, "sulfur", "Sulfuric", "#forge:dusts/sulfur", "thermal:sulfur_dust")
    reagent(0x735A65, 0xB8AFAF, "niter", "Nitric", "#forge:dusts/niter", "thermal:niter_dust")
    reagent(0x91C5FC, 0xA7CBCF, "certus", "Certus Quartz", "#forge:dusts/certus_quartz", "ae2:certus_quartz_dust")
    reagent(0xB19E8F, 0xE7E2DB, "quartz", "Nether Quartz", "#forge:dusts/quartz", "thermal:quartz_dust")
    category()
    reagent(0x616A60, 0xD0D2C5, "zinc", "Zinc", "#forge:dusts/zinc", "kubejs:zinc_dust")
    reagent(0xDD7E5D, 0xFCEFBA, "copper", "Copper", "#forge:dusts/copper", "thermal:copper_dust")
    reagent(0xA6A6A6, 0xD5D5D5, "iron", "Iron", "#forge:dusts/iron", "thermal:iron_dust")
    reagent(0x977756, 0xE4D196, "nickel", "Nickel", "#forge:dusts/nickel", "thermal:nickel_dust")
    reagent(0x232456, 0x7C95A4, "lead", "Lead", "#forge:dusts/lead", "thermal:lead_dust")
    reagent(0xD99413, 0xFAF25E, "gold", "Gold", "#forge:dusts/gold", "thermal:gold_dust")
    category()
    reagent(0xFC7781, 0xFCCED0, "cinnabar", "Cinnabar", "#forge:gems/cinnabar", "thermal:cinnabar")
    reagent(0x335DC1, 0x7395E7, "lapis", "Lapis Lazuli", "#forge:dusts/lapis", "thermal:lapis_dust")
    reagent(0x246BE9, 0x76C6FC, "sapphire", "Sapphire", "#forge:dusts/sapphire", "thermal:sapphire_dust")
    reagent(0x00A82B, 0xADFACB, "emerald", "Emerald", "#forge:dusts/emerald", "thermal:emerald_dust")
    reagent(0x9D0A33, 0xFB7B71, "ruby", "Ruby", "#forge:dusts/ruby", "thermal:ruby_dust")
    reagent(0x20C3B3, 0xD2FCF3, "diamond", "Diamond", "#forge:dusts/diamond", "thermal:diamond_dust")
    category()
    catalyst(0x506D84, 0x889EAF, "igneous", "Igneous")
    catalyst(0xB5CDA3, 0xC9E4C5, "herbal", "Herbal")
    catalyst(0x9F5F80, 0xFF8474, "volatile", "Volatile")
    catalyst(0xFFB037, 0xFFE268, "crystal", "Crystalline")
    catalyst(0x232457, 0x7D97A6, "metal", "Metallurgic")
    catalyst(0x3EDBF0, 0xC0FEFC, "gem", "Gemstone")
    category()

    substrateblock(0xb200ed, 0xff66cc, "substrate_chaos", "Chaos Catalyst", "mystical:block/chaos_catalyst")
        .item(item => item.rarity("rare"))

    substrateblock(0x474449, 0x967DA0, "substrate_silicon", "Silicon Reagent", "mystical:block/substrate")
        .item(item => item.rarity("rare"))

    substrateblock(0x9FADB4, 0xBECCD2, "substrate_silver", "Silver Reagent", "mystical:block/substrate")
        .item(item=>item.rarity("rare"))

    acceleratorBlock(0xFFBC5E, "accellerator_glowstone", "Glowstone Accelerator", "mystical:block/accellerator")

    acceleratorBlock(0xAA0F01, "accellerator_redstone", "Redstone Accelerator", "mystical:block/accellerator")
})