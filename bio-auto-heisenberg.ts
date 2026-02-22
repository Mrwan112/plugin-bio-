import { definePlugin } from "@vencord/utils";

export default definePlugin({
    name: "HeisenbergBio",
    description: "تغيير البايو تلقائياً",
    start() {
        const fixedWisdom = "المريض إذا حصل على الشِفاء اول شيء يتركه هو الدواء !\nDid you understand?\n\n\n\n";
        const quotes = [
            "🧪 I am the one who knocks.",
            "⚗️ Say my name.",
            "💎 I'm in the empire business.",
            "🔫 Tread lightly.",
            "🚬 No more half measures.",
            "💰 I did it for me. I was good at it.",
            "🧪 Stay out of my territory."
        ];

        let i = 0;
        const updateBio = async () => {
            try {
                // @ts-ignore
                const UserProfileUtils = Vencord.Webpack.findByProps("updateProfile");
                if (UserProfileUtils) {
                    await UserProfileUtils.updateProfile({ bio: fixedWisdom + quotes[i] });
                    i = (i + 1) % quotes.length;
                }
            } catch (e) {}
        };

        updateBio();
        this.interval = setInterval(updateBio, 60000);
    },
    stop() {
        if (this.interval) clearInterval(this.interval);
    }
});
