// كود خام بدون استدعاءات خارجية معقدة
export default {
    name: "HeisenbergBio",
    description: "تغيير البايو تلقائياً",
    start() {
        const fixedWisdom = "المريض إذا حصل على الشِفاء اول شيء يتركه هو الدواء !\nDid you understand?\n\n\n\n";
        const quotes = [
            "🧪 I am the one who knocks.",
            "⚗️ Say my name.",
            "💎 I'm in the empire business.",
            "🔫 Tread lightly.",
            "🚬 No more half measures."
        ];

        let i = 0;
        // @ts-ignore
        this.interval = setInterval(async () => {
            try {
                // @ts-ignore
                const UserProfileUtils = Vencord.Webpack.findByProps("updateProfile");
                if (UserProfileUtils) {
                    await UserProfileUtils.updateProfile({ bio: fixedWisdom + quotes[i] });
                    i = (i + 1) % quotes.length;
                }
            } catch (e) {}
        }, 60000);
    },
    stop() {
        // @ts-ignore
        if (this.interval) clearInterval(this.interval);
    }
};
