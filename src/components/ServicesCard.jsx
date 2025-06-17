export default function ServicesCard({ title, description, icon = "" }) {
    return (
        <div className="bg-bg/80 relative backdrop-blur-xl border-2 border-yellow-500 rounded-xl p-6 md:p-8 flex flex-col gap-4  ">
            <div className="flex flex-row gap-2 text-3xl font-semibold text-accent">{title}</div>
            <div className="text-xl">{description}</div>
            <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 text-2xl md:text-4xl bg-accent text-white border-2 border-yellow-500 backdrop-blur-lg p-2 rounded-full hover:shadow-yellow-500/50  hover:shadow-lg transition duration-300 ease-in-out">{icon}</div>
        </div>
    )
};
