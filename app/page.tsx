import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-[300px] p-4 shadow-md">
        <CardContent className="">
          <h1 className="text-xl font-bold mb-4">Welcome to Battery Tracker</h1>
        </CardContent>
      </Card>
    </main>
  );
}
