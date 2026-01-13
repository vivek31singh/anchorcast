'use client';

import { useState } from 'react';
import { GlassPane } from '@/components/bento/GlassPane';
import { Button } from '@/components/ui/Button';
import { TemplateEditor } from '@/components/templates/TemplateEditor';
import { DUMMY_TEMPLATES, Template } from '@/lib/dummy';
import { DocumentTextIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function TemplatesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'fb' | 'ig'>('fb');
  const [templates, setTemplates] = useState<Template[]>(DUMMY_TEMPLATES);
  const [savedNotification, setSavedNotification] = useState(false);

  const currentTemplate = templates.find(t => t.platform === selectedPlatform);

  const handleSaveTemplate = (platform: 'fb' | 'ig', templateText: string, hashtagPool: string[]) => {
    setTemplates(prev => 
      prev.map(t => 
        t.platform === platform 
          ? { ...t, templateText, hashtagPool } 
          : t
      )
    );
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Templates</h1>
          <p className="text-white/60">Manage your social media message templates</p>
        </div>
        {savedNotification && (
          <GlassPane className="bg-emerald-500/20 border-emerald-500/40 px-4 py-2">
            <p className="text-emerald-300 text-sm font-medium flex items-center gap-2">
              <DocumentTextIcon className="w-4 h-4" />
              Template saved successfully
            </p>
          </GlassPane>
        )}
      </div>

      {/* Platform Tabs */}
      <GlassPane className="p-1.5 flex gap-1">
        <button
          onClick={() => setSelectedPlatform('fb')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            selectedPlatform === 'fb'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>
        <button
          onClick={() => setSelectedPlatform('ig')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
            selectedPlatform === 'ig'
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram
        </button>
      </GlassPane>

      {/* Template Editor */}
      {currentTemplate && (
        <TemplateEditor
          platform={selectedPlatform}
          template={currentTemplate}
          onSave={handleSaveTemplate}
        />
      )}

      {/* Tips Section */}
      <GlassPane className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <DocumentTextIcon className="w-5 h-5" />
          Tips for Better Templates
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Use Placeholders</h4>
            <p className="text-white/60 text-sm">Dynamic placeholders like {boat_title}, {price}, and {year} auto-populate with boat data.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Hashtag Strategy</h4>
            <p className="text-white/60 text-sm">Use 5-15 relevant hashtags. Mix broad and niche tags for better reach.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Platform Specific</h4>
            <p className="text-white/60 text-sm">Facebook allows more text, while Instagram works best with shorter, engaging copy.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Call to Action</h4>
            <p className="text-white/60 text-sm">End with a clear CTA like "DM for details" or "Link in bio".</p>
          </div>
        </div>
      </GlassPane>
    </div>
  );
}