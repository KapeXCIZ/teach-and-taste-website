import Button from "@/components/Button";
import { useTranslations } from "next-intl";

import Link from "next/link";

export default function NotFound() {
    const t = useTranslations("notfound");
    return (
        <div className="flex flex-col items-center h-[80dvh] [justify-content:center] gap-3">
            <h1 className="text-7xl font-bold text-accent">404</h1>
            <p className="text-2xl">{t("description")}</p>
            <Link href={"/"}>
                <Button className={"flex justify-center items-center gap-2"}>
                    {t("cta")}
                </Button>
            </Link>
        </div>
    );
}