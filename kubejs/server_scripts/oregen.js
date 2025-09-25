ServerEvents.lowPriorityData(event => {
    removeFeature(event, "minecraft:ore_redstone")
    removeFeature(event, "minecraft:ore_redstone_lower")

    removeFeature(event, "occultism:ore_silver")
    removeFeature(event, "occultism:ore_silver_deepslate")
})