// 代码生成时间: 2025-09-01 09:03:38
// Function to create a new process with unique id
function createProcess(name) {
    const processId = Date.now();
    return {
        id: processId,
        name: name,
        running: false
    };
}

// Function to start a process
function startProcess(processList, processId) {
    const process = processList.find(p => p.id === processId);
    if (!process) {
        throw new Error('Process not found');
    }
    process.running = true;
}

// Function to stop a process
function stopProcess(processList, processId) {
    const process = processList.find(p => p.id === processId);
    if (!process) {
        throw new Error('Process not found');
    }
    process.running = false;
}

// Function to display the current status of all processes
function displayProcesses(processList) {
    console.log('Current Processes:');
    processList.forEach(process => {
        console.log(`Process ID: ${process.id}, Name: ${process.name}, Running: ${process.running}`);
    });
}

// Main function to simulate the process manager
function simulateProcessManager() {
    try {
        const processList = [];

        // Create some processes
        processList.push(createProcess('Process 1'));
        processList.push(createProcess('Process 2'));
        processList.push(createProcess('Process 3'));

        // Start some processes
        startProcess(processList, processList[0].id);
        startProcess(processList, processList[2].id);

        // Display current processes
        displayProcesses(processList);

        // Stop a process
        stopProcess(processList, processList[0].id);

        // Display current processes again
        displayProcesses(processList);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Run the process manager simulation
simulateProcessManager();