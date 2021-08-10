export const RawData = ({ data }: { data: Record<string, any> }) => (
  <details style={{ marginTop: '50px' }}>
    <summary>Show raw data</summary>
    <pre>
      <code> {JSON.stringify(data, null, 4)}</code>
    </pre>
  </details>
);
