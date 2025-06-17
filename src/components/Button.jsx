import { cn } from "@/lib/utils";

const variants = {
    ghost: "hover:bg-accent/10 hover:text-accent active:bg-accent/20",
    outline: "border  border-accent hover:bg-accent/90 text-accent hover:text-bg active:bg-accent",
    solid: "bg-yellow-400 text-body  hover:bg-yellow-500 active:bg-yellow-600 active:text-white",
};

const activeVariants = {
    ghost: "bg-accent/10 text-accent",
    outline: "bg-accent/90 text-bg bg-accent",
    solid: "bg-yellow-600 text-black"
}

export default function Button({ children, className, variant = "ghost", active = false, ...props }) {
    return (
        <button {...props} className={cn("border border-transparent transition duration-300 rounded-lg ease-in-out px-4 py-2  flex justify-center items-center ", variants[variant], active && activeVariants[variant], className)}>
            {children}
        </button>
    );
}
