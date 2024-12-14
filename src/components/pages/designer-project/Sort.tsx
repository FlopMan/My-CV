import { MenuItem, Select } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React from "react";

const Sort = () => {
    return (
        <div className="flex gap-[1.17rem] justify-center items-center">
            <span className="text-[1.11111rem] text-[#303030]">Sort</span>
            <Select
                sx={{
                    "& .MuiSelect-select": {
                        padding: 0,
                    },
                }}
                value={2024}
                className="rounded-full px-[1.1713rem] py-[0.58565rem] text-[1.1713rem] border border-[#4F43FF]"
            >
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2024}>2025</MenuItem>
            </Select>
        </div>
    );
};

export default Sort;
