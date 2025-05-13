import { useGetEventsQuery } from "@/store/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const { data, error, isLoading } = useGetEventsQuery();

  if (isLoading) return <p className="text-sm">Loading events...</p>;
  if (error) return <p className="text-red-500">Failed to load events.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Calendar Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {new Date(event.start).toLocaleString()} →{" "}
                {new Date(event.end).toLocaleString()}
              </p>
              {event.location && (
                <p className="mt-2 text-sm">📍 {event.location}</p>
              )}
              {event.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
