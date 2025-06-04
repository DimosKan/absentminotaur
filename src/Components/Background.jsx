export default function Biography({ children }) {
    
  return (
    <div className="relative mt-20">
        <img
            src="../absentminotaur/gallery/labyrinth.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm pointer-events-none"
        />
        {children}
    </div>
  )
}