import { Spinner } from "../ui/spinner";

export default function PageSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner className="size-10" />
    </div>
  );
}
