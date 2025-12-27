import React, { useState } from 'react';
import { ArrowLeft, FileText, Save, Send } from 'lucide-react';

export default function TestActivityPage() {
  const [activeTab, setActiveTab] = useState('notes');
  const [formData, setFormData] = useState({
    subject: 'Test activity',
    createdBy: 'Mitchell Admin',
    maintenanceFor: 'Equipment',
    equipment: 'Acer Laptop/LP/203/19281928',
    category: 'Computers',
    requestDate: '2025-12-18',
    maintenanceType: 'Corrective',
    team: 'Internal Maintenance',
    technician: 'Aka Foster',
    scheduledDate: '2025-12-28T14:30',
    duration: '00:00',
    priority: 2,
    company: 'My Company (San Francisco)',
    notes: '',
    instructions: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
    alert('Draft saved successfully!');
  };

  const handleSubmit = () => {
    console.log('Submitting:', formData);
    alert('Test activity submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with Status Flow */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Test Activity</h1>
                <p className="text-sm text-gray-600 mt-1">Maintenance Request & Test Activity Management</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                  <FileText className="w-4 h-4" />
                  <span>Worksheet</span>
                </button>
              </div>
            </div>

            {/* Status Flow */}
            <div className="flex items-center space-x-4 text-sm">
              <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg font-semibold shadow-sm">
                In Progress
              </span>
              <span className="text-gray-400 text-xl">→</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
                Repaired
              </span>
              <span className="text-gray-400 text-xl">→</span>
              <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-medium">
                Scrap
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                    Test Activity Details
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject?
                      </label>
                      <input 
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Created By */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Created By
                      </label>
                      <input 
                        type="text"
                        value={formData.createdBy}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                    </div>

                    {/* Maintenance For */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Maintenance For
                      </label>
                      <div className="flex items-center space-x-2">
                        <select 
                          value={formData.maintenanceFor}
                          onChange={(e) => handleInputChange('maintenanceFor', e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option>Equipment</option>
                          <option>Facility</option>
                          <option>Vehicle</option>
                        </select>
                        <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Equipment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Equipment
                      </label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="text"
                          value={formData.equipment}
                          onChange={(e) => handleInputChange('equipment', e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <input 
                        type="text"
                        value={formData.category}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                    </div>

                    {/* Request Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Request Date?
                      </label>
                      <input 
                        type="date"
                        value={formData.requestDate}
                        onChange={(e) => handleInputChange('requestDate', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Maintenance Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Maintenance Type
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <div className="relative">
                            <input 
                              type="radio" 
                              name="maintenance-type" 
                              checked={formData.maintenanceType === 'Corrective'}
                              onChange={() => handleInputChange('maintenanceType', 'Corrective')}
                              className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">● Corrective</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <div className="relative">
                            <input 
                              type="radio" 
                              name="maintenance-type" 
                              checked={formData.maintenanceType === 'Preventive'}
                              onChange={() => handleInputChange('maintenanceType', 'Preventive')}
                              className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">○ Preventive</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                    Assignment & Schedule
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Team */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Team
                      </label>
                      <input 
                        type="text"
                        value={formData.team}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                    </div>

                    {/* Technician */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Technician
                      </label>
                      <input 
                        type="text"
                        value={formData.technician}
                        onChange={(e) => handleInputChange('technician', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Scheduled Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Scheduled Date?
                      </label>
                      <input 
                        type="datetime-local"
                        value={formData.scheduledDate}
                        onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                      </label>
                      <input 
                        type="text"
                        value={`${formData.duration} hours`}
                        onChange={(e) => handleInputChange('duration', e.target.value.replace(' hours', ''))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="00:00 hours"
                      />
                    </div>

                    {/* Priority */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Priority
                      </label>
                      <div className="flex space-x-3">
                        {[1, 2, 3].map((level) => (
                          <button
                            key={level}
                            onClick={() => handleInputChange('priority', level)}
                            className={`p-4 border-2 rounded-lg transition-all ${
                              formData.priority === level
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-blue-300'
                            }`}
                          >
                            <svg 
                              className={`w-6 h-6 transform rotate-45 ${
                                formData.priority === level ? 'text-blue-600' : 'text-gray-400'
                              }`}
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <rect x="6" y="6" width="12" height="12" />
                            </svg>
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input 
                        type="text"
                        value={formData.company}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes and Instructions Tabs */}
            <div className="mt-8">
              <div className="flex space-x-1 border-b-2 border-gray-200">
                <button 
                  onClick={() => setActiveTab('notes')}
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === 'notes'
                      ? 'border-b-2 border-blue-600 text-blue-600 -mb-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Notes
                </button>
                <button 
                  onClick={() => setActiveTab('instructions')}
                  className={`px-6 py-3 font-medium transition-all ${
                    activeTab === 'instructions'
                      ? 'border-b-2 border-blue-600 text-blue-600 -mb-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Instructions
                </button>
              </div>
              <div className="mt-4">
                {activeTab === 'notes' ? (
                  <textarea 
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                    placeholder="Add notes or special instructions for this test activity..."
                  ></textarea>
                ) : (
                  <textarea 
                    value={formData.instructions}
                    onChange={(e) => handleInputChange('instructions', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="5"
                    placeholder="Add detailed instructions for completing this test activity..."
                  ></textarea>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-between items-center pt-6 border-t-2 border-gray-200">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tests</span>
              </button>
              <div className="flex space-x-3">
                <button 
                  onClick={handleSaveDraft}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                >
                  <Save className="w-4 h-4" />
                  <span>Save as Draft</span>
                </button>
                <button 
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Save & Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Color Indicators */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">Optimistic Barracuda</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">Code Paglu_A</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">Modern Shark</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            <span className="text-gray-700 font-medium">Orderly Penguin</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <div className="w-4 h-4 bg-orange-500 rounded-fu
