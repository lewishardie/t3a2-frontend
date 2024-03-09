const AvatarImage = ({ avatarOptions, onSelectAvatar, selectedAvatar }) => {
    const handleAvatarSelect = (e) => {
      onSelectAvatar(e.target.value);
    };
  
    return (
      <div className="avatar-options">
        <select 
          value={selectedAvatar} 
          onChange={handleAvatarSelect} 
          className="avatar-select"
        >
          {avatarOptions.map((avatar, index) => (
            <option key={index} value={avatar.url}>
              {avatar.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default AvatarImage;