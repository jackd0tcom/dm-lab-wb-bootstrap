function Value({ title, description, action }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{action}</p>
    </div>
  );
}

export default function Values({ values }) {
  return (
    <section>
      {values.map(({ title, description, action }, index) => (
        <Value key={index} title={title} description={description} action={action} />
      ))}
    </section>
  );
}
