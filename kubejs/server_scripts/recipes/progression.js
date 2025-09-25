// priority: 2
function ifiniDeploying(event, output, input, tool) {
    return {
        "type": "create:deploying",
        "ingredients": [
            Ingredient.of(input).toJson(),
            Ingredient.of(tool).toJson()
        ],
        "results": [
            Item.of(output)
        ],
        "keepHeldItem": true
    }
}

ServerEvents.recipes(event => {
    /**
	 * Used to store the name of an item when making sequenced assembly recipes
	 * @type {string}
	*/
    let transitional
    // - - - - - Chapter 1 - - - - -
    // Wood slab cutting
    let plankCutting = (wood) => {
        // Some mods name their wood slabs 'planks_slab' for some reason
        // Mods that do this don't get given auto-generated slab cutting recipes by Create
        if (!Item.exists(wood + "_slab")) {
            let planks = wood + "_planks"
            let slab = wood + "_planks_slab"
            event.recipes.create.cutting(Item.of(slab, 2), planks).processingTime(150).id(`kubejs:cutting/${wood.split(":")[1]}_slab`)
        }
    }
    wood_types.forEach(plankCutting)

    // Remove andesite recipe (and granite and diorite)
    event.remove({ id: "minecraft:diorite" })
    event.remove({ id: "minecraft:andesite" })
    event.remove({ id: "minecraft:granite" })
    // algal blend
    event.remove({ id: "architects_palette:algal_blend" })
    event.shaped(Item.of("architects_palette:algal_blend", 4), [
        "SS",
        "AA"
    ], {
        A: "minecraft:clay_ball",
        S: ["minecraft:kelp", "minecraft:seagrass"]
    })
    event.shaped(Item.of("architects_palette:algal_blend", 4), [
        "AA",
        "SS"
    ], {
        A: "minecraft:clay_ball",
        S: ["minecraft:kelp", "minecraft:seagrass"]
    })
    event.recipes.create.mixing(Item.of("architects_palette:algal_blend", 2), ["minecraft:clay_ball", ["minecraft:kelp", "minecraft:seagrass"]])
    // algal brick
    event.remove({ output: "architects_palette:algal_brick" })
    event.smelting("architects_palette:algal_brick", "architects_palette:algal_blend").xp(0).cookingTime(120)
    // Andesite alloy
    event.remove({ id: "tconstruct:compat/create/andesite_alloy_iron" })
    event.remove({ id: "create:crafting/materials/andesite_alloy" })
    event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
    event.remove({ id: "create:mixing/andesite_alloy" })
    event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
    event.remove({ id: "thermal:compat/create/smelter_create_alloy_andesite_alloy" })
    event.remove({ id: "thermal:compat/create/smelter_create_alloy_andesite_alloy" })
    event.remove({ id: "tconstruct:compat/create/andesite_alloy_zinc" })
    event.remove({ id: "tconstruct:compat/create/andesite_alloy_iron" })
    event.shaped(Item.of("create:andesite_alloy", 2), [
        "SS",
        "AA"
    ], {
        A: "minecraft:andesite",
        S: "architects_palette:algal_brick"
    })
    event.shaped(Item.of("create:andesite_alloy", 2), [
        "AA",
        "SS"
    ], {
        A: "minecraft:andesite",
        S: "architects_palette:algal_brick"
    })
    event.recipes.create.mixing(Item.of("create:andesite_alloy", 2), ["architects_palette:algal_brick", "minecraft:andesite"])
    // kinetic assembly
    transitional = "kubejs:incomplete_kinetic_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:kinetic_mechanism",
    ], "#minecraft:wooden_slabs", [
        event.recipes.create.deploying(transitional, [transitional, "create:andesite_alloy"]),
        event.recipes.create.deploying(transitional, [transitional, "create:andesite_alloy"]),
        event.recipes.create.deploying(transitional, [transitional, "#kubejs:saws"])
    ]).transitionalItem(transitional)
        .loops(1)
        .id("kubejs:kinetic_mechanism")
    // Handcrafting recipe
    event.shapeless("kubejs:kinetic_mechanism", ["#kubejs:saws", "create:cogwheel", "create:andesite_alloy", "#minecraft:logs"]).id("kubejs:kinetic_mechanism_manual_only")

    // Andesite machines
    donutCraft(event, "kubejs:andesite_machine", "create:andesite_casing", "kubejs:kinetic_mechanism")
    // secondary materials
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "#forge:plates/brass", "create:golden_sheet")
    event.remove({ output: "thermal:drill_head" })
    event.shaped("thermal:drill_head", [
        "NN ",
        "NLP",
        " PL"
    ], {
        N: "minecraft:iron_nugget",
        P: "create:iron_sheet",
        L: "thermal:lead_ingot"
    })

    event.remove({ output: "thermal:saw_blade" })
    event.shaped("thermal:saw_blade", [
        "NPN",
        "PLP",
        "NPN"
    ], {
        N: "minecraft:iron_nugget",
        P: "create:iron_sheet",
        L: "thermal:lead_ingot"
    })

    // Machine Crafting
    andesiteMachine(event, Item.of("create:portable_storage_interface", 2))
    andesiteMachine(event, Item.of("create:encased_fan", 1), "create:propeller")
    andesiteMachine(event, Item.of("create:mechanical_press", 1), "minecraft:iron_block")
    andesiteMachine(event, Item.of("mbd2:strainer", 1), "minecraft:iron_bars")
    andesiteMachine(event, Item.of("create:mechanical_mixer", 1), "create:whisk")
    andesiteMachine(event, Item.of("create:mechanical_drill", 1), "thermal:drill_head")
    andesiteMachine(event, Item.of("create:mechanical_saw", 1), "thermal:saw_blade")
    if (Platform.isLoaded("createdeco")) { andesiteMachine(event, Item.of("create:mechanical_roller", 1), "createdeco:andesite_hull") } else { andesiteMachine(event, Item.of("create:mechanical_roller", 1), "create:andesite_alloy_block") }
    if (Platform.isLoaded("rechiseledcreate")) { andesiteMachine(event, Item.of("rechiseledcreate:mechanical_chisel", 1), "rechiseled:chisel") }
    andesiteMachine(event, Item.of("create:deployer", 1), "create:brass_hand")
    andesiteMachine(event, Item.of("create:mechanical_harvester", 2))
    andesiteMachine(event, Item.of("create:mechanical_plough", 2))
    andesiteMachine(event, Item.of("create:contraption_controls", 1))
    andesiteMachine(event, Item.of("thermal:device_tree_extractor", 1), "minecraft:bucket")
    andesiteMachine(event, Item.of("ae2:meteorite_compass", 1), "minecraft:compass")
    andesiteMachine(event, Item.of("ae2:charger", 1), "ae2:certus_quartz_crystal")
    andesiteMachine(event, Item.of("thermal:dynamo_stirling", 1), "thermal:rf_coil")
    andesiteMachine(event, Item.of("create:andesite_funnel", 4))
    andesiteMachine(event, Item.of("create:andesite_tunnel", 4))
    andesiteMachine(event, Item.of("kubejs:pipe_module_utility", 4))
    // Gourmand Upgrade
    createMachine("thermal:dynamo_stirling", event, "thermal:dynamo_gourmand", "minecraft:golden_carrot")
    createMachine("thermal:dynamo_stirling", event, "thermal:dynamo_gourmand", "minecraft:golden_apple")

    // - - - - - Chapter 1A - - - - -
    // event.remove({ type: "thermal:tree_extractor" })
    /*
    wood_types.forEach(wood => {
        if (Item.exists(wood + "_log") && Item.exists(wood + "_leaves") && Item.exists(wood + "_sapling")) {
            addTreeOutput(event, wood + "_log", wood + "_leaves").id("kubejs:devices/tree_extractor/tree_extractor_" + wood.split(":")[1])
        }
    })
        */
    // addTreeOutput( "tconstruct:greenheart_log", "tconstruct:earth_slime_leaves", {fluid: "tconstruct:earth_slime", amount: 10})
    // addTreeOutput( "tconstruct:skyroot_log", "tconstruct:sky_slime_leaves", {fluid: "tconstruct:sky_slime", amount: 10})

    // Rubber
    event.remove({ id: "thermal:rubber_3" })
    event.remove({ id: "thermal:rubber_from_dandelion" })
    event.remove({ id: "thermal:rubber_from_vine" })

    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "item": "minecraft:vine", "count": 4 },
            { "fluid": "minecraft:water", "amount": 250 }
        ],
        "results": [
            { "item": "thermal:rubber" }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            { "tag": "minecraft:flowers", "count": 4 },
            { "fluid": "minecraft:water", "amount": 250 }
        ],
        "results": [
            { "item": "thermal:rubber" }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "fluid": "thermal:resin", "amount": 250 }
        ],
        "results": [
            { "item": "thermal:rubber" }
        ]
    })

    // Belts
    event.remove({ id: "create:crafting/kinetics/belt_connector" })
    event.shaped(Item.of("create:belt_connector", 3), [
        "SSS",
        "SSS"
    ], {
        S: "thermal:cured_rubber"
    })

    // Sealed mechanism assembly
    transitional = "kubejs:incomplete_sealed_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:sealed_mechanism",
    ], "kubejs:kinetic_mechanism", [
        event.recipes.create.deploying(transitional, [transitional, "thermal:cured_rubber"]),
        event.recipes.create.deploying(transitional, [transitional, "thermal:cured_rubber"]),
        event.recipes.create.pressing(transitional, [transitional])
    ]).transitionalItem(transitional)
        .loops(1)
        .id("kubejs:sealed_mechanism")
    // manual crafting
    event.shaped("kubejs:sealed_mechanism", [
        "SCS"
    ], {
        C: "kubejs:kinetic_mechanism",
        S: "thermal:cured_rubber"
    }).id("kubejs:sealed_mechanism_manual_only")

    // Copper Machines
    donutCraft(event, "kubejs:copper_machine", "create:copper_casing", "kubejs:sealed_mechanism")

    // Machine Crafting
    copperMachine(event, Item.of("create:copper_backtank", 1), "minecraft:copper_block")
    copperMachine(event, Item.of("create:portable_fluid_interface", 2))
    copperMachine(event, Item.of("create:spout", 1), "minecraft:hopper")
    copperMachine(event, Item.of("thermal:upgrade_augment_1", 1), "minecraft:redstone")
    copperMachine(event, Item.of("create:hose_pulley", 1))
    copperMachine(event, Item.of("create:item_drain", 1), "minecraft:iron_bars")
    copperMachine(event, Item.of("thermal:dynamo_magmatic", 1), "thermal:rf_coil")
    copperMachine(event, Item.of("thermal:device_water_gen", 1), "minecraft:bucket")
    copperMachine(event, Item.of("create:smart_fluid_pipe", 2))
    copperMachine(event, Item.of("kubejs:attachment_base", 1), "create:mechanical_pump")
    // smeltery controller recipe
    event.remove({ id: "tconstruct:smeltery/casting/seared/smeltery_controller" })
    event.remove({ id: "tconstruct:smeltery/melting/metal/copper/smeltery_controller" })
    donutCraft(event, "tconstruct:smeltery_controller", "#tconstruct:seared_blocks", "kubejs:sealed_mechanism").modifyResult((grid, result) => {
        let item = grid.find("#tconstruct:seared_blocks")
        return result.withNBT({ texture: item.id })
    })

    // - - - - - Chapter 1B - - - - -
    // Sturdy sheets are not used. It is replaced by reinforced mechanisms
    event.remove({ id: "create:sequenced_assembly/sturdy_sheet" })
    // Magma blocks
    event.blasting("minecraft:magma_block", "minecraft:deepslate")
    // Magma to obsidian is a vanilla create recipe
    // reinforced mechanism assembly
    transitional = "kubejs:incomplete_reinforced_mechanism"
    event.recipes.create.sequenced_assembly([
        "kubejs:reinforced_mechanism",
    ], "kubejs:kinetic_mechanism", [
        event.recipes.create.deploying(transitional, [transitional, "minecraft:obsidian"]),
        event.recipes.create.deploying(transitional, [transitional, "minecraft:obsidian"]),
        event.recipes.create.pressing(transitional, [transitional])
    ]).transitionalItem(transitional)
        .loops(1)
        .id("kubejs:reinforced_mechanism")
    // manual crafting
    event.shaped("kubejs:reinforced_mechanism", [
        "OCO"
    ], {
        C: "kubejs:kinetic_mechanism",
        O: "minecraft:obsidian"
    }).id("kubejs:reinforced_mechanism_manual_only")
    // Gold machine
    donutCraft(event, "kubejs:gold_machine", "create:railway_casing", "kubejs:reinforced_mechanism")

    // Machine Crafting
    goldMachine(event, Item.of("create:controls", 1), "minecraft:lever")
    goldMachine(event, Item.of("create:track_station", 2))
    goldMachine(event, Item.of("create:track_signal", 4))
    goldMachine(event, Item.of("create:schedule", 4))
    goldMachine(event, Item.of("create:track_observer", 2))

    if (Platform.isLoaded("railways")) {
        goldMachine(event, Item.of("railways:semaphore", 4))
        goldMachine(event, Item.of("railways:conductor_whistle", 4))
        goldMachine(event, Item.of("railways:track_coupler", 2))
        goldMachine(event, Item.of("railways:track_switch_andesite", 1), "create:andesite_alloy")
        goldMachine(event, Item.of("railways:track_switch_brass", 1), "create:brass_ingot")
    }
})