const _ = require('lodash')

module.exports = (lines) => {
    let totalSurfaceArea = 0
    _.forEach(lines, (line) => {
        let dimensions = _.split(line, 'x')

        let length = dimensions[0]
        let width = dimensions[1]
        let height = dimensions[2]

        let perimeters = [
            (length + width) * 2,
            (width + height) * 2,
            (height + length) * 2
        ]

        let surfaceArea = 2 * _.sum(areas)
        let smallestArea = _.min(areas)

        totalSurfaceArea += surfaceArea + smallestArea
    })
    return totalSurfaceArea
}