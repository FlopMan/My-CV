import useStore from "@/app/(store)/store";

type TProps = {
  value: string;
  label: string;
};

const RenderItemTableContent = ({ value, label }: TProps) => {
  const { setCurrentKey } = useStore((state) => state);
  const scrollToElement = (elementId: string, offset: number = 0): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with ID "${elementId}" not found.`);
    }
  };
  return (
    <div>
      <button
        className="text-black"
        onClick={() => {
          setCurrentKey(value);
          scrollToElement(value.replaceAll(".", "_"), 100);
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default RenderItemTableContent;
