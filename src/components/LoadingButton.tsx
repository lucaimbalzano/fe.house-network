import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = "text-white",
  btnColor = "bg-[#01bed2]",
  children,
  loading = false,
}) => {
  return (
    <button
      type="submit"
      className={twMerge(
        `block w-full mt-4 py-2 rounded-2xl text-white font-semibold mb-2  hover:bg-[#4dd1e0] hover:shadow-md sm:ml-5 sm:mr-5`,
        `${btnColor} ${loading && btnColor}`
      )}
    >
      {loading ? (
        <div className="flex items-center gap-3 justify-center">
          <Spinner />
          <span className="text-slate-500 inline-block text-center">Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};
