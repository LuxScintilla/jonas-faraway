export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list.
      </footer>
    );

  const numPacked = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((numPacked / items.length) * 100);

  if (packedPercentage === 100) {
    return <footer className="stats">You have everything! Ready to go.</footer>;
  } else {
    return (
      <footer className="stats">
        You have{" "}
        {items.length === 1 ? `${items.length} item` : `${items.length} items`}{" "}
        on your list, and you already packed {numPacked} ({packedPercentage}%)
      </footer>
    );
  }
}
