const { useState } = React;

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

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

      <AccordionItem title="Key Components">
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Automated Crate Retrieval</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Implement automated retrieval of crates from the Kratten buffer.</li>
              <li>Eliminate differences between first and manual instances.</li>
              <li>Develop an intelligent software system to control the IN/OUT operations of the Kratten buffer.</li>
            </ul>
          </li>
          <li><strong>Intelligent Crate Distribution</strong>
            <p>The system will determine crate distribution based on:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Current status of the Kratten buffer</li>
              <li>Types and quantities of articles waiting</li>
              <li>Availability of vacuum machines</li>
              <li>Number of crates waiting to be processed</li>
              <li>Available space for additional crates</li>
            </ul>
          </li>
          <li><strong>Optimization Goals</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Minimize the number of crates within the Kratten buffer</li>
              <li>Prevent bottlenecks on the D1A line arriving from sorting stations</li>
            </ul>
          </li>
        </ol>
      </AccordionItem>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Hardware Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Sensor Limitations</h3>
          <p>Sensors incorrectly read a full line at the entrance of overhead vacuum machine conveyors when space is still available.</p>
          
          <h3 className="font-semibold mt-4 mb-2">Mechanical Factors</h3>
          <ul className="list-disc list-inside">
            <li>Crate wear and tear causes bottom sides to bend inwards</li>
            <li>Reduced contact area between crates and conveyors/pushers</li>
            <li>Crates may sway and enter conveyors at undesired angles</li>
            <li>Misaligned crates can trigger sensors incorrectly, indicating a full line</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Proposed Solutions</h3>
          <ul className="list-disc list-inside">
            <li>Upgrade to smart sensor systems capable of more accurate space detection</li>
            <li>Install multiple sensors along the conveyor for improved coverage</li>
            <li>Implement software algorithms to compensate for mechanical issues and false readings</li>
            <li>Regular maintenance and replacement of worn crates to minimize mechanical problems</li>
            <li>Utilize high friction materials on the conveyor/pushers to eliminate the influence of wear and tear on crates</li>
          </ul>
        </CardContent>
      </Card>

      <AccordionItem title="Vacuum Machine Types">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Vers (Fresh) Line</strong>
            <p>No vacuum operations; direct transport of meat to the cartonnage side.</p>
            <p><strong>Process:</strong> Meat is packaged directly into crates/boxes, with or without plastic bags.</p>
            <p><strong>Automation Potential:</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li>Can be automated using overhead-mounted SCARA robots with soft grippers.</li>
              <li>Requires analysis of overall product weight on the fresh line.</li>
              <li>Emptying crates solution is comparable to the mechanism at botensilo.</li>
            </ul>
          </li>
          <li>
            <strong>Cryovac</strong>
            <p>Most complicated operations due to ability to vacuum bone-in products.</p>
            <p><strong>Challenges:</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li>Irregular movement of packaging film and product during operation.</li>
              <li>More complex than standard pick-and-place operations.</li>
              <li>Equipped with a sorting computer for individual piece weighing and custom labeling.</li>
            </ul>
            <p><strong>Potential Solution:</strong> Use designated sorting machines for custom labeling and utilize Cryovac machine solely for vacuum packing pre-labeled parts.</p>
          </li>
          <li>
            <strong>Repack/Multivac</strong>
            <p>Relatively simpler compared to Cryovac. Machines with designated tracks and thermoforming buckets (folie).</p>
            <p><strong>Process Steps:</strong></p>
            <ul className="list-disc list-inside ml-6">
              <li>Place labels (usually pre-attached from sorting stations) with bottom sheet in folie bucket.</li>
              <li>Place individual meat pieces in the bucket.</li>
            </ul>
            <p><strong>Operation Type:</strong> Simple pick-and-place operation for the meat, it can be complicated for the labels.</p>
          </li>
        </ol>
      </AccordionItem>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Challenges in Automating Labelling Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Label Placement:</strong> Current procedure involves placing the label on the inner side of the vacuum pack, adding complexity to automation.</li>
            <li><strong>Label Material:</strong> Labels are made of materials without adhesives, making it difficult to attach labels to products.</li>
            <li><strong>Labeling at Vacuum Area:</strong> In some cases, products arrive at the vacuum area without labels, requiring individual weighing, identification, and label generation.</li>
            <li><strong>Maintaining Traceability:</strong> When meat parts arrive with labels from sorting stations, maintaining trace in automated handling can be challenging as labels can get mixed up between products.</li>
          </ul>
        </CardContent>
      </Card>

      <AccordionItem title="Automating Empty Crate Handling">
        <div>
          <h3 className="font-semibold mb-2">Current Process:</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Empty crates are stacked on karts.</li>
            <li>An operator continuously monitors for fully stacked karts.</li>
            <li>The operator manually pushes full karts to a designated corner.</li>
            <li>The operator then loads crates one by one onto the outgoing overhead line towards the crate washer.</li>
          </ol>

          <h3 className="font-semibold mb-2">Proposed Automation Solution:</h3>
          <p>Install a mechanism to automatically move empty crates from the working position to the output conveyor.</p>
          
          <h3 className="font-semibold mt-4 mb-2">Benefits:</h3>
          <ul className="list-disc list-inside">
            <li>Eliminates the need for manual visual inspection and decision-making.</li>
            <li>Removes the inefficient step of transporting karts.</li>
            <li>Significantly reduces the time spent on crate handling.</li>
            <li>Streamlines the process of feeding the vacuum machine with meat by eliminating the initial crate placement step.</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Alternative Solution for Space-Constrained Areas:</h3>
          <p>Implement an intelligent robotic gripper system capable of:</p>
          <ul className="list-disc list-inside">
            <li>Handling both meat pieces and empty crates.</li>
            <li>Automating vacuum machine tending.</li>
            <li>Managing empty crate handling.</li>
          </ul>
        </div>
      </AccordionItem>
    </div>
  );
};

ReactDOM.render(<VacuumOperationsDashboard />, document.getElementById('root'));
