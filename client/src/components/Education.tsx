const Education = () => {
    return (
      <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-cosmic-purple">
          Education
        </h2>
  
        <div className="space-y-6">
          <div className="border-l-4 border-cosmic-purple pl-6">
            <h3 className="text-lg font-semibold text-white">
              B.Tech in Computer Science Engineering
            </h3>
            <p className="text-gray-400 text-sm">
              Bennett University – 2022 to 2026
            </p>
            <p className="text-gray-300 text-sm mt-1">
              CGPA: 9.4  
            </p>
          </div>
  
          {/* Add more education blocks if needed */}
        </div>
      </section>
    );
  };
  
  export default Education;
  