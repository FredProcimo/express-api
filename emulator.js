const { spawn } = require("child_process");

function exec(folder, cmd, args) {
    return spawn(cmd, args, {
        cwd: folder,
        stdio: undefined,
        shell: true,
    });
}

// Start API
const p = exec("./", "npm run build && npm start");

p.stdout.on("data", (data) => {
    const res = `${data}`.trim()
    console.log(res, "\n")
    // If API Started
    if (res.includes("Server running")) {
        // start emulator
        e = exec("./", "firebase emulators:start --only auth,firestore");
        e.stdout.on("data", (data) => console.log(`${data}`.trim()))
        e.stderr.on("data", (data) => console.log(`${data}`.trim()))
        e.on("close", () => p?.kill?.())
    }
});

p.stderr.on("data", (data) => console.log(`${data}`.trim()))