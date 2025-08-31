// 代码生成时间: 2025-08-31 11:55:59
import * as THREE from 'three';

// 定义一个函数来创建场景
function createScene() {
    const scene = new THREE.Scene();
    // 添加一个环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // 添加一个点光源
    const pointLight = new THREE.PointLight(0xffffff, 1);
    scene.add(pointLight);
    
    return scene;
}

// 定义一个函数来创建相机
function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;
    return camera;
}

// 定义一个函数来创建渲染器
function createRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

// 定义一个函数来切换主题
function switchTheme(scene, theme) {
    try {
        if (!theme || theme !== 'light' && theme !== 'dark') {
            throw new Error('Invalid theme specified');
        }
        
        const ambientLight = scene.getObjectByName('ambientLight', true);
        const pointLight = scene.getObjectByName('pointLight', true);
        
        if (theme === 'light') {
            ambientLight.color.setHex(0xffffff);
            pointLight.color.setHex(0xffffff);
        } else if (theme === 'dark') {
            ambientLight.color.setHex(0x000000);
            pointLight.color.setHex(0x000000);
        }
    } catch (error) {
        console.error('Error switching theme:', error.message);
    }
}

// 初始化场景、相机和渲染器
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// 设置动画循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// 切换主题为 'light'
switchTheme(scene, 'light');