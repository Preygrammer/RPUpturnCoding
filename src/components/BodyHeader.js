export default function () {
  return (
    <div className="body-header">
      <div className="body-header-left">
        <div className="body-header-left-title">Algorithm Problem Practice</div>
        <div className="body-header-left-description">
          Get some problems and make a solution
        </div>
      </div>
      <div className="body-header-right">
        <div className="body-header-right-tags">
          <select className="select-control">
            <option>Difficulty</option>
            <option>Strings</option>
            <option>Integers</option>
            <option>Arrays</option>
            <option>Numbers</option>
            <option>Sorting</option>
            <option>Cryptography</option>
          </select>

          <select className="select-control">
            <option>Tags</option>
            <option>Strings</option>
            <option>Integers</option>
            <option>Arrays</option>
            <option>Numbers</option>
            <option>Sorting</option>
            <option>Cryptography</option>
          </select>
        </div>
      </div>
    </div>
  );
}
