export default function BandMembers() {
  const members = [
    {
      name: "Mark",
      role: "Lead vocals, songwriter, pianist, guitar",
    },
    {
      name: "Sharon",
      role: "Backing vocals, percussion",
    },
    {
      name: "Lee",
      role: "Bass, drums & producer",
    },
    {
      name: "Marco",
      role: "Saxophonist, backing vocals",
    },
  ];

  return (
    <section
      id="band"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Band
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        {/* Band Photo */}
        <div className="mb-12 rounded-2xl overflow-hidden md:shadow-2xl">
          <div className="relative w-auto h-[300px] md:h-[500px] lg:h-[600px]">
            <img
              src="./band.png"
              alt="Lucky Skies image - Sharon, Mark, Marco and Lee"
              // fill
              className="md:object-cover object-contain"
              // quality={100}
            />
          </div>
          <div className="bg-white text-black text-center py-3">
            <p className="text-sm md:text-base italic">
              Lucky Skies (L to R): Sharon, Mark, Marco and Lee
            </p>
          </div>
        </div>

        {/* Band Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Genre & Influences */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Sound</h3>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-purple-600">Genre:</span>{" "}
              Contemporary Classic Pop
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-purple-600">Influences:</span>{" "}
              Just about every decent pop artist from the last few decades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
