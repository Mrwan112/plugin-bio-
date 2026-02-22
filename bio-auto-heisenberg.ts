// كود هايزنبرغ النهائي - يعمل كبلقن خارجي
const fixedWisdom = "المريض إذا حصل على الشِفاء اول شيء يتركه هو الدواء !\nDid you understand?\n\n\n\n";
const quotes = [
    "🧪 I am the one who knocks.",
    "⚗️ Say my name.",
    "💎 I'm in the empire business.",
    "🔫 Tread lightly.",
    "🚬 No more half measures.",
    "💰 I did it for me. I was good at it."
];
let i = 0;

setInterval(async () => {
    try {
        const UserProfileUtils = Vencord.Webpack.findByProps("updateProfile");
        await UserProfileUtils.updateProfile({ bio: fixedWisdom + quotes[i] });
        i = (i + 1) % quotes.length;
    } catch (e) {}
}, 60000); // كل دقيقة
