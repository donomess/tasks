import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holiday = "🎊,❤️,🐇,🎃,🎄";
    const [currentHoliday, setHoliday] = useState<string>("🐇");

    function sortalpha(): void {
        const hollist = holiday.split(",");
        if (hollist.indexOf(currentHoliday) === hollist.length - 1) {
            setHoliday(hollist[0]);
        } else {
            setHoliday(hollist[hollist.indexOf(currentHoliday) + 1]);
        }
    }

    function sortdate(): void {
        if (currentHoliday === "🐇") {
            setHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setHoliday("🎄");
        } else if (currentHoliday === "🎄") {
            setHoliday("🎊");
        } else if (currentHoliday === "🎊") {
            setHoliday("❤️");
        } else if (currentHoliday === "❤️") {
            setHoliday("🐇");
        }
    }
    return (
        <div>
            <Button
                onClick={() => {
                    console.log(currentHoliday);
                    sortalpha();
                    console.log("New Holiday: ", currentHoliday);
                }}
            >
                {" "}
                Alphabet{" "}
            </Button>
            <Button
                onClick={() => {
                    console.log(currentHoliday);
                    sortdate();
                    console.log("New Holiday: ", currentHoliday);
                }}
            >
                Year
            </Button>
            Holiday: {currentHoliday}
        </div>
    );
}
