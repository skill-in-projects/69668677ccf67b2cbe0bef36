// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi69668677ccf67b2cbe0bef36-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
