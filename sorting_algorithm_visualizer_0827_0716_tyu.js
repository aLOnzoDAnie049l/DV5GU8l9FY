// 代码生成时间: 2025-08-27 07:16:58
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Helper functions for visualizing the array
function createVisualArray(array) {
    const geometry = new THREE.Geometry();
    array.forEach((value, index) => {
        const position = new THREE.Vector3(index, value, 0);
        geometry.vertices.push(position);
    });
    const material = new THREE.PointsMaterial({color: 0x888888, size: 5});
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    return points;
}

// Sorting algorithm functions
function bubbleSort(array, points) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
                // Update the points in the scene
                points.geometry.vertices[i] = new THREE.Vector3(i, array[i], 0);
                points.geometry.vertices[i + 1] = new THREE.Vector3(i + 1, array[i + 1], 0);
                points.geometry.verticesNeedUpdate = true;
            }
        }
    } while(swapped);
    return array;
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Main program
function main() {
    try {
        // Initialize the array and visualize it
        const array = [5, 3, 2, 6, 8, 1, 4];
        const points = createVisualArray(array);

        // Perform sort and visualize
        const sortedArray = bubbleSort(array, points);
        console.log('Sorted Array:', sortedArray);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

main();

// Animation loop
animate();