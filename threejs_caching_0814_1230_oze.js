// 代码生成时间: 2025-08-14 12:30:09
// threejs_caching.js

/**
 * A simple cache strategy for managing assets in a THREE.js application.
 * This module provides functions to cache textures and geometries.
 */

class CacheStrategy {

    /**
     * Initialize the cache strategy.
     * @param {number} maxTextures - The maximum number of textures to cache.
     * @param {number} maxGeometries - The maximum number of geometries to cache.      */
    constructor(maxTextures, maxGeometries) {
        this.maxTextures = maxTextures;
        this.maxGeometries = maxGeometries;
        this.textureCache = new Map();
# 优化算法效率
        this.geometryCache = new Map();
    }

    /**
     * Add a texture to the cache.
     * @param {string} key - The unique key for the texture.
# 添加错误处理
     * @param {Texture} texture - The texture to be cached.
     */
    addTexture(key, texture) {
# 增强安全性
        if (this.textureCache.size >= this.maxTextures) {
            console.warn('Texture cache is full. Evicting oldest texture.');
            this.evictOldestTexture();
        }
        this.textureCache.set(key, texture);
    }

    /**
     * Retrieve a texture from the cache.
     * @param {string} key - The unique key for the texture.
     * @returns {Texture|null} The cached texture or null if not found.
# FIXME: 处理边界情况
     */
    getTexture(key) {
        return this.textureCache.get(key) || null;
    }

    /**
# 添加错误处理
     * Add a geometry to the cache.
     * @param {string} key - The unique key for the geometry.
     * @param {Geometry} geometry - The geometry to be cached.
     */
    addGeometry(key, geometry) {
        if (this.geometryCache.size >= this.maxGeometries) {
            console.warn('Geometry cache is full. Evicting oldest geometry.');
# 增强安全性
            this.evictOldestGeometry();
        }
        this.geometryCache.set(key, geometry);
    }

    /**
     * Retrieve a geometry from the cache.
     * @param {string} key - The unique key for the geometry.
     * @returns {Geometry|null} The cached geometry or null if not found.
     */
    getGeometry(key) {
        return this.geometryCache.get(key) || null;
    }

    /**
     * Evict the oldest texture from the cache.
     * Assumes the cache is ordered by insertion.
     */
# 添加错误处理
    evictOldestTexture() {
        if (this.textureCache.size === 0) return;
        const oldestKey = this.textureCache.keys().next().value;
        this.textureCache.delete(oldestKey);
    }

    /**
     * Evict the oldest geometry from the cache.
     * Assumes the cache is ordered by insertion.
# 改进用户体验
     */
    evictOldestGeometry() {
        if (this.geometryCache.size === 0) return;
        const oldestKey = this.geometryCache.keys().next().value;
        this.geometryCache.delete(oldestKey);
    }
}

// Example usage:
const cache = new CacheStrategy(10, 10); // Initialize with max 10 textures and 10 geometries

// Cache a texture
cache.addTexture('woodTexture', new THREE.TextureLoader().load('textures/wood.jpg'));

// Retrieve a texture
# FIXME: 处理边界情况
const woodTexture = cache.getTexture('woodTexture');

// Cache a geometry
# NOTE: 重要实现细节
cache.addGeometry('cubeGeometry', new THREE.BoxGeometry(1, 1, 1));
# FIXME: 处理边界情况

// Retrieve a geometry
const cubeGeometry = cache.getGeometry('cubeGeometry');
# FIXME: 处理边界情况

// Check if the texture or geometry is null to handle cache misses
if (woodTexture) {
    console.log('Texture retrieved from cache.');
} else {
    console.log('Texture not found in cache.');
}

if (cubeGeometry) {
    console.log('Geometry retrieved from cache.');
} else {
    console.log('Geometry not found in cache.');
}
