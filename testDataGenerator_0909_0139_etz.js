// 代码生成时间: 2025-09-09 01:39:44
class TestDataGenerator {
    /**
     * Creates a new instance of TestDataGenerator.
     */
    constructor() {
        this.geometries = [];
        this.materials = [];
    }

    /**
     * Generates a random geometry.
     * @returns {THREE.BufferGeometry} A random geometry.
     */
    generateRandomGeometry() {
        const geometryTypes = [THREE.BoxGeometry, THREE.SphereGeometry, THREE.ConeGeometry];
        const type = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
        const geometry = new type(1, 1, 1); // Using 1 for simplicity, can be parameterized
        this.geometries.push(geometry);
        return geometry;
    }

    /**
     * Generates a random material.
     * @returns {THREE.Material} A random material.
     */
    generateRandomMaterial() {
        const materialTypes = [THREE.MeshBasicMaterial, THREE.MeshLambertMaterial, THREE.MeshPhongMaterial];
        const type = materialTypes[Math.floor(Math.random() * materialTypes.length)];
        const material = new type({
            color: Math.random() * 0xffffff,
            side: THREE.DoubleSide
        });
        this.materials.push(material);
        return material;
    }

    /**
     * Creates a mesh from a geometry and material.
     * @param {THREE.BufferGeometry} geometry The geometry to use.
     * @param {THREE.Material} material The material to use.
     * @returns {THREE.Mesh} A mesh with the given geometry and material.
     */
    createMesh(geometry, material) {
        if (!geometry || !material) {
            throw new Error('Geometry and material must be provided to create a mesh.');
        }
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }

    /**
     * Releases the geometries and materials to garbage collection.
     * This is a simple way to clean up memory.
     */
    cleanup() {
        this.geometries.forEach(geometry => {
            geometry.dispose();
        });
        this.materials.forEach(material => {
            material.dispose();
        });
        this.geometries = [];
        this.materials = [];
    }
}

// Example usage:
const testGenerator = new TestDataGenerator();
try {
    const geometry = testGenerator.generateRandomGeometry();
    const material = testGenerator.generateRandomMaterial();
    const mesh = testGenerator.createMesh(geometry, material);
    // Add the mesh to the ThreeJS scene...
} catch (error) {
    console.error('Error generating test data:', error);
} finally {
    // Cleanup the generated resources
    testGenerator.cleanup();
}
