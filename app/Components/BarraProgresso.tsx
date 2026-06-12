const BarraProgresso = ({ progresso }: { progresso: number }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${progresso}%` }}></div>
    </div>
  );
}
export default BarraProgresso;