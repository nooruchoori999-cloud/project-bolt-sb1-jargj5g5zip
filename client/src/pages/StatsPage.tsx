export default function StatsPage() {
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <iframe
        src="http://167.179.85.215:8091/"
        title="TreadFi Stats"
        className="w-full flex-1 border-0"
        allow="fullscreen"
        data-testid="iframe-stats"
      />
    </div>
  );
}
