'use client';

import { useState } from 'react';
import { GlassPane } from '@/components/bento/GlassPane';
import { Button } from '@/components/ui/Button';
import { HashtagChips } from './HashtagChips';
import { Template } from '@/lib/types';
import { InformationCircleIcon, PlusIcon } from '@heroicons/react/24/outline';

interface TemplateEditorProps {
  platform: 'fb' | 'ig';
  template: Template;
  onSave: (platform: 'fb' | 'ig', templateText: string, hashtagPool: string[]) => void;
}

const PLACEHOLDERS = [
  { key: '{boat_title}', label: 'Boat Title', description: 'Full name of the boat' },
  { key: '{price}', label: 'Price', description: 'Listing price with currency' },
  { key: '{year}', label: 'Year', description: 'Manufacturing year' },
  { key: '{length}', label: 'Length', description: 'Boat length in feet' },
  { key: '{location}', label: 'Location', description: 'Boat location' },
];

export function TemplateEditor({ platform, template, onSave }: TemplateEditorProps) {
  const [templateText, setTemplateText] = useState(template.templateText);
  const [hashtags, setHashtags] = useState<string[]>(template.hashtagPool);
  const [newHashtag, setNewHashtag] = useState('');
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<string | null>(null);

  const handleInsertPlaceholder = (placeholder: string) => {
    setTemplateText(prev => prev + placeholder);
    setSelectedPlaceholder(placeholder);
    setTimeout(() => setSelectedPlaceholder(null), 300);
  };

  const handleAddHashtag = () => {
    const tag = newHashtag.trim().replace(/^#/, '');
    if (tag && !hashtags.includes(`#${tag}`)) {
      setHashtags(prev => [...prev, `#${tag}`]);
    }
    setNewHashtag('');
  };

  const handleSave = () => {
    onSave(platform, templateText, hashtags);
  };

  const handleReset = () => {
    setTemplateText(template.templateText);
    setHashtags(template.hashtagPool);
  };

  return (
    <div className="space-y-4">
      {/* Message Composition */}
      <GlassPane className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Message Template</h2>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <InformationCircleIcon className="w-4 h-4" />
            <span>{templateText.length} characters</span>
          </div>
        </div>

        <textarea
          value={templateText}
          onChange={(e) => setTemplateText(e.target.value)}
          placeholder="Enter your message template here..."
          className="w-full h-40 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
        />

        {/* Placeholder Helpers */}
        <div className="mt-4">
          <p className="text-sm text-white/70 mb-3 font-medium">Quick Insert Placeholders</p>
          <div className="flex flex-wrap gap-2">
            {PLACEHOLDERS.map((placeholder) => (
              <button
                key={placeholder.key}
                onClick={() => handleInsertPlaceholder(placeholder.key)}
                className="group relative px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-white/80 hover:text-white transition-all"
                title={placeholder.description}
              >
                <code className="font-mono">{placeholder.key}</code>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {placeholder.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </GlassPane>

      {/* Hashtag Management */}
      <GlassPane className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Hashtags</h2>
          <span className="text-white/60 text-sm">{hashtags.length} / {template.maxHashtags} max</span>
        </div>

        <HashtagChips
          hashtags={hashtags}
          onRemove={(tag) => setHashtags(prev => prev.filter(t => t !== tag))}
        />

        {/* Add Hashtag Input */}
        <div className="mt-4 flex gap-2">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">#</span>
            <input
              type="text"
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddHashtag()}
              placeholder="Add hashtag"
              className="w-full bg-white/5 border border-white/20 rounded-xl py-2.5 pl-8 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              disabled={hashtags.length >= template.maxHashtags}
            />
          </div>
          <Button
            onClick={handleAddHashtag}
            variant="primary"
            disabled={hashtags.length >= template.maxHashtags}
            className="px-4"
          >
            <PlusIcon className="w-5 h-5" />
          </Button>
        </div>

        {hashtags.length >= template.maxHashtags && (
          <p className="mt-2 text-amber-400 text-sm flex items-center gap-1">
            <InformationCircleIcon className="w-4 h-4" />
            Maximum hashtag limit reached
          </p>
        )}
      </GlassPane>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          onClick={handleReset}
          variant="ghost"
        >
          Reset Changes
        </Button>
        <Button
          onClick={handleSave}
          variant="primary"
          className="px-8"
        >
          Save Template
        </Button>
      </div>
    </div>
  );
}