
const defaultTheme = {
    code: "🎨 void mist",
    background: "linear-gradient(to bottom, #080808, #111122, #1a1a2a)", // kabut gela
    color: "#e0f7fa",
};

const themeList = [
    defaultTheme,
    {
        code: "🌌 nebula",
        background: "linear-gradient(to bottom, #030712, #1e1f3a, #1a3a2a)",
        color: "#e0f7fa"
    },
    {
        code: "🌠 aurora",
        background: "linear-gradient(to right, #0a0f10, #131e26, #1a2a33)",
        color: "#e0e0e0"
    },
    {
        code: "🌀 andromeda",
        background: "linear-gradient(to bottom, #0d1a33, #172d50, #121a24)",
        color: "#dceefb"
    },
    {
        code: "✨ quasar",
        background: "linear-gradient(to right, #00010a, #001b3a, #3a0066)",
        color: "#f0d9ff"
    },
    {
        code: "🌄 cosmic dawn",
        background: "linear-gradient(to bottom, #050419, #1a1838, #14141e)",
        color: "#e0e7ff"
    },
    {
        code: "🌟 starlight veil",
        background: "linear-gradient(to bottom, #111122, #101828, #0c1e3a)",
        color: "#ccdfff"
    },
    {
        code: "🌑 eclipse shadow",
        background: "linear-gradient(to right, #1a252e, #1a1a1a, #0a1a1f)",
        color: "#d6f5ff"
    },
    {
        code: "🌚 dark matter",
        background: "linear-gradient(to bottom, #0a1a1f, #1a2a33, #1f3a4a)",
        color: "#d4eaff"
    },
    {
        code: "🪐 gravity field",
        background: "linear-gradient(to right, #101020, #15283f, #0e1a2c)",
        color: "#cce6ff"
    },
    {
        code: "🌙 moonlit haze",
        background: "linear-gradient(to bottom, #0c1420, #1a2a3b, #151e3f)",
        color: "#c0d9ff"
    },
    {
        code: "🌫️ void mist",
        background: "linear-gradient(to bottom, #080808, #111122, #1a1a2a)",
        color: "#eee"
    },
    {
        code: "❄️ lunar frost",
        background: "linear-gradient(to right, #151a23, #2a2f41, #363a55)",
        color: "#dbe9ff"
    },
    {
        code: "🕳️ event horizon",
        background: "linear-gradient(to bottom, #0a1a1f, #1a3a4f, #121f2c)",
        color: "#bfe4ff"
    },
    {
        code: "💫 orbit glow",
        background: "linear-gradient(to right, #15131f, #1c1c4a, #29293d)",
        color: "#d3dbff"
    },
    {
        code: "🌌 galactic dusk",
        background: "linear-gradient(to bottom, #111132, #24245a, #2c2c66)",
        color: "#e0e5ff"
    },
    {
        code: "🌁 Neon Mirage",
        background: "linear-gradient(to right, #41295a, #2F0743)",
        color: "#e0c3ff"
    },
    {
        code: "🧪 Plasma Core",
        background: "linear-gradient(to right, #00d2ff, #928dab)",
        color: "#f0faff"
    },
    {
        code: "🧼 Soap Light",
        background: "linear-gradient(to right, #dfe9f3, #ffffff, #fffbf3)",
        color: "#37474f"
    },
    {
        code: "💿 Digital Static",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#eeeeee"
    },
    {
        code: "🌌 Eventide Horizon",
        background: "linear-gradient(to right, #373B44, #4286f4)",
        color: "#f0f8ff"
    },
    {
        code: "🪄 Midnight Bloom",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        color: "#e6e6fa"
    },
    {
        code: "💡 Ether Beam",
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
        color: "#3e2723"
    },
    {
        code: "🧠 Neural Depth",
        background: "linear-gradient(to right, #000000, #434343)",
        color: "#d0f8ff"
    },
    {
        code: "🌬️ Frost Nebula",
        background: "linear-gradient(to right, #accbee, #e7f0fd)",
        color: "#1a3b5d"
    },
    {
        code: "🎧 Cyberwave",
        background: "linear-gradient(to right, #fc466b, #3f5efb)",
        color: "#fff"
    },

    {
        code: "🍎 iOS Bloom",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
        color: "#4a2b2b", // coklat gelap agar kontras
    },
    {
        code: "🍏 iOS Mint Blue",
        background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        color: "#123", // biru keabu untuk kontras lembut
    },
    {
        code: "🌌 Galaxy Core",
        background: "linear-gradient(to right, #283c86, #45a247)",
        color: "#e5ffe6",
    },
    {
        code: "💠 Samsung Sky",
        background: "linear-gradient(to right, #2193b0, #6dd5ed)",
        color: "#002b3a",
    },
    {
        code: "🌫️ Dynamic Island",
        background: "linear-gradient(to right, #d9a7c7, #fffcdc)",
        color: "#3a2c2c",
    },
    {
        code: "📱 AMOLED Pop",
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
        color: "#ffffff",
    },
    {
        code: "🟣 iPhone Purple Wave",
        background: "linear-gradient(to right, #a18cd1, #fbc2eb)",
        color: "#3f2b5b",
    },
    {
        code: "🧿 OneUI Pearl",
        background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
        color: "#2f2f5f",
    },
    {
        code: "🔥 Google Pixel Heat",
        background: "linear-gradient(to right, #ff512f, #f09819)",
        color: "#fff3e0",
    },
    {
        code: "🌟 Mac Glow",
        background: "linear-gradient(to right, #fdfcfb, #e2d1c3)",
        color: "#4f433d",
    },
    {
        code: "🌤️ Cupertino Daylight",
        background: "linear-gradient(to right, #f6f9fc, #e0eafc)",
        color: "#263238",
    },
    {
        code: "🌀 iPhone Depth",
        background: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
        color: "#1a1a1a",
    },
    {
        code: "🔷 Galaxy Ice",
        background: "linear-gradient(to right, #74ebd5, #acb6e5)",
        color: "#103a4a",
    },
    {
        code: "🌈 Fluid Color",
        background: "linear-gradient(to right, #ffecd2, #fcb69f, #a1c4fd)",
        color: "#3e2723",
    },
    {
        code: "🌋 Pixel Lava",
        background: "linear-gradient(to right, #ff6a00, #ee0979)",
        color: "#fff3e0",
    },
    {
        code: "🫧 Soft Galaxy",
        background: "linear-gradient(to right, #dfe9f3, #ffffff)",
        color: "#263238",
    },
    {
        code: "🌸 Petal Flow",
        background: "linear-gradient(to right, #fbc2eb, #fcd4d4)",
        color: "#5f2c4a",
    },
    {
        code: "🧊 Ice Crystal",
        background: "linear-gradient(to right, #c2e9fb, #e0f7fa)",
        color: "#0a3f4f",
    },
    {
        code: "🟠 Pixel Pop",
        background: "linear-gradient(to right, #fcb045, #fd1d1d)",
        color: "#fff8e1",
    },
    {
        code: "💫 Night Aurora",
        background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
        color: "#2f2a4f",
    },
    {
        code: "🌌 Deep Space",
        background: "linear-gradient(to bottom, #0b0c10, #1f2833, #45a29e)",
        color: "#e0f7fa"
    },
    {
        code: "🌄 Solar Flare",
        background: "linear-gradient(to right, #ff512f, #f09819, #ffe29f)",
        color: "#2c1a0d"
    },
    {
        code: "🌿 Emerald Forest",
        background: "linear-gradient(to right, #005f3c, #00897b, #80cbc4)",
        color: "#e0fff9"
    },
    {
        code: "🌁 Misty Noir",
        background: "linear-gradient(to bottom, #1c1c1c, #2c3e50, #34495e)",
        color: "#f0f0f0"
    },
    {
        code: "🌇 Cyber Sunset",
        background: "linear-gradient(to right, #ee0979, #ff6a00, #fbc2eb)",
        color: "#fff5f8"
    },
    {
        code: "❄️ Frostbyte",
        background: "linear-gradient(to right, #83a4d4, #b6fbff)",
        color: "#0f2230"
    },
    {
        code: "🧬 Quantum Pulse",
        background: "linear-gradient(to right, #000428, #004e92)",
        color: "#e0f0ff"
    },
    {
        code: "🌊 Ocean Echo",
        background: "linear-gradient(to bottom, #2e3192, #1bffff)",
        color: "#e6ffff"
    },
    {
        code: "💻 Matrix Grid",
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        color: "#a8f0dc"
    },
    {
        code: "🪐 Saturn Vibe",
        background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
        color: "#fdf6f9"
    },
    {
        code: "🌅 Sunset Horizon",
        background: "linear-gradient(to right, #ff758c, #ff7eb3)",
        color: "#ffffff"
    },
    {
        code: "🌿 Forest Morning",
        background: "linear-gradient(to right, #a8e063, #56ab2f)",
        color: "#1a1a1a"
    },
    {
        code: "🌊 Ocean Breeze",
        background: "linear-gradient(to right, #00c6fb, #005bea)",
        color: "#ffffff"
    },
    {
        code: "🌻 Sunfield Glow",
        background: "linear-gradient(to right, #fceabb, #f8b500)",
        color: "#333333"
    },
    {
        code: "🍂 Autumn Earth",
        background: "linear-gradient(to right, #d1913c, #ffd194)",
        color: "#2e2e2e"
    },
    {
        code: "🧁 Candy Frost",
        background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
        color: "#333333"
    },
    {
        code: "🌌 Dreamspace",
        background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
        color: "#ffffff"
    },
    {
        code: "🧘 Zen Mist",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        color: "#1a1a1a"
    },
    {
        code: "🎨 Pastel Flow",
        background: "linear-gradient(to right, #a1c4fd, #c2e9fb, #fbc2eb)",
        color: "#2f2f2f"
    },
    {
        code: "🔥 Retro Heat",
        background: "linear-gradient(to right, #f83600, #f9d423)",
        color: "#1a1a1a"
    }
];

// Normalize themes to include explicit nav styles so UI (nav/header) can adapt per-theme.
// If a theme already provides navBackground/navColor, keep them; otherwise default to
// the theme's background/color.
const normalizedThemeList = themeList.map(t => ({
    ...t,
    navBackground: t.navBackground || t.background,
    navColor: t.navColor || t.color,
}));

const normalizedDefault = {
    ...defaultTheme,
    navBackground: defaultTheme.navBackground || defaultTheme.background,
    navColor: defaultTheme.navColor || defaultTheme.color,
};

export const themes = { themeList: normalizedThemeList, defaultTheme: normalizedDefault };