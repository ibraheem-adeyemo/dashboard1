import { useState, useRef } from 'react';
import { X } from 'lucide-react';

export default function TagInput({ 
  initialTags = [],
  onTagsChange,
  placeholder = "Type and press space to add tags..."
}) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const addTag = (tagText) => {
    const trimmedTag = tagText.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      const newTags = [...tags, trimmedTag];
      setTags(newTags);
      if (onTagsChange) onTagsChange(newTags);
    }
    setInputValue('');
  };

  const removeTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    if (onTagsChange) onTagsChange(newTags);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Prevent multiple spaces
    if (value.endsWith(' ') && inputValue.trim()) {
      addTag(inputValue);
    } else {
      setInputValue(value);
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full">
      <h2 className="text-white text-xl font-semibold mb-4">Tag</h2>
      
      <div
        onClick={handleContainerClick}
        className="border border-gray-700 rounded-lg p-3 min-h-[120px] cursor-text hover:border-gray-600 transition-colors"
      >
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 bg-[#2d3441] text-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-[#353b4a] transition-colors group"
            >
              {tag}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(index);
                }}
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label={`Remove ${tag}`}
              >
                <X size={14} strokeWidth={2} />
              </button>
            </span>
          ))}
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ''}
            className="flex-1 min-w-[120px] bg-transparent text-gray-300 outline-none placeholder:text-gray-600 text-sm"
          />
        </div>
      </div>
      
      <p className="text-gray-500 text-xs mt-2">
        Press space or enter to add a tag
      </p>
    </div>
  );
}
