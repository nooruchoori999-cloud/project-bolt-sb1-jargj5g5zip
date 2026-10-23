export default function TreadHolderDataPage() {
  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex items-center justify-between px-4 py-1.5 border-b border-border/50 text-xs text-muted-foreground">
        <span>$TREAD Holder Data</span>
        <a href="https://tread101.xyz/tools-app/tread-holders/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground" data-testid="link-open-new-tab">Open in new tab ↗</a>
      </div>
      <iframe src="https://tread101.xyz/tools-app/tread-holders/" title="$TREAD Holder Data" className="w-full flex-1 border-0" allow="fullscreen" />
    </div>
  );
}
