"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Konfigurasi env
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)()); // Agar bisa diakses oleh Vue nanti
app.use(express_1.default.json()); // Agar bisa baca body JSON
// Route sederhana
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server is running!');
});
// Contoh route API
app.get('/api/test', (req, res) => {
    res.json({
        message: "Halo dari Backend!",
        status: "success"
    });
});
// Jalankan server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
