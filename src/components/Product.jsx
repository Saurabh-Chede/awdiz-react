export default function Product({title,price}) {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#f5b082",
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
      }}
    >
      <h1 style={{fontSize:19}}>
        {title}
      </h1>
      <p>₹{price}</p>
      
    </div>
  );
}
