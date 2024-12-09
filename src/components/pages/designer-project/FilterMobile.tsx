import { MenuItem, Select } from "@mui/material";

export default function FilterMobile() {
    return (
        <div className="md:hidden flex flex-col-reverse">
            <Select
                sx={{
                    "& .MuiSelect-select": {
                        padding: 0,
                    },
                }}
                value={2024}
                className="rounded-full px-[1.1713rem] py-[0.58565rem] text-[1.1713rem] border border-[#131313]"
            >
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2024}>2025</MenuItem>
            </Select>
            <Select
                sx={{
                    "& .MuiSelect-select": {
                        padding: 0,
                    },
                }}
                value={"all"}
                className="rounded-full px-[1.1713rem] py-[0.58565rem] text-[1.1713rem] border border-[#131313]  mb-[0.83rem]"
            >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"branding"}>Branding</MenuItem>
                <MenuItem value={"uxUi"}>UX/UI</MenuItem>
                <MenuItem value={"socialMedia"}>Social Media</MenuItem>
            </Select>
        </div>
    );
}
