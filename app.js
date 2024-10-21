const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border rounded-lg mb-2">
      <button
        className="w-full text-left p-4 font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold">
    {children}
  </h2>
);

const CardContent = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);

const VacuumOperationsDashboard = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Automated Crate Handling for Vacuum Operations</h1>
      
      <div className="mb-6">
        <img src="https://via.placeholder.com/650x320" alt="Vacuum operations overview" className="w-full rounded-lg" />
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Objective</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Fully automate the handling of crates from sorting to the vacuum machines within the existing brownfield scenario, without introducing robots or additional machines. This automation will be achieved through software changes and the potential addition of sensors for real-time machine availability monitoring.</p>
        </CardContent>
      </Card>

      {/* Rest of the component remains the same... */}

    </div>
  );
};

ReactDOM.render(<VacuumOperationsDashboard />, document.getElementById('root'));

