import React, { useState, useRef, useEffect } from 'react';
import { Camera, Check, X, Clock } from 'lucide-react';

const ClockIn = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<'success' | 'failed' | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startFaceScan = async () => {
    setIsScanning(true);
    setScanResult(null);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      // Simulate face recognition process
      setTimeout(() => {
        setIsScanning(false);
        setScanResult('success'); // Simulate successful recognition
        
        // Stop camera
        if (videoRef.current?.srcObject) {
          const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
          tracks.forEach(track => track.stop());
        }
      }, 3000);
    } catch (error) {
      setIsScanning(false);
      setScanResult('failed');
    }
  };

  const todaysPunches = [
    { type: 'Clock In', time: '09:00 AM', status: 'completed' },
    { type: 'Lunch Out', time: '12:30 PM', status: 'completed' },
    { type: 'Lunch In', time: '01:30 PM', status: 'completed' },
    { type: 'Clock Out', time: '--:-- --', status: 'pending' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Clock-In with Face ID</h1>
        <p className="text-gray-600">Use facial recognition to clock in and out securely</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Clock-In Area */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-8">
          <div className="text-center space-y-6">
            {/* Current Time Display */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-2xl sm:text-4xl font-bold text-gray-900">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-base sm:text-lg text-gray-600 mt-2">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>

            {/* Camera/Scan Area */}
            <div className="relative">
              <div className="w-full max-w-sm h-48 sm:h-60 mx-auto bg-gray-900 rounded-lg overflow-hidden relative">
                {isScanning ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Camera className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                
                {/* Scanning overlay */}
                {isScanning && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-lg font-medium">Scanning...</div>
                  </div>
                )}
              </div>

              {/* Scan Button */}
              <button
                onClick={startFaceScan}
                disabled={isScanning}
                className={`mt-6 px-8 py-4 rounded-lg font-medium text-lg transition-colors ${
                  isScanning
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isScanning ? 'Scanning...' : 'Start Face Scan'}
              </button>
            </div>

            {/* Scan Result */}
            {scanResult && (
              <div className={`p-4 rounded-lg flex items-center justify-center space-x-3 ${
                scanResult === 'success' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                {scanResult === 'success' ? (
                  <>
                    <Check className="w-6 h-6" />
                    <span className="font-medium">Successfully Clocked In at {currentTime.toLocaleTimeString()}</span>
                  </>
                ) : (
                  <>
                    <X className="w-6 h-6" />
                    <span className="font-medium">Face recognition failed. Please try again.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Today's Punches */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Today's Punches
          </h2>
          
          <div className="space-y-3">
            {todaysPunches.map((punch, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{punch.type}</p>
                  <p className="text-sm text-gray-500">{punch.time}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  punch.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Hours</span>
              <span className="font-medium">7:30</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-600">Break Time</span>
              <span className="font-medium">1:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Clock-In History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Clock-In History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: 'Today', clockIn: '09:00 AM', clockOut: '--', hours: '--', status: 'Active' },
                { date: 'Yesterday', clockIn: '08:55 AM', clockOut: '05:30 PM', hours: '8:35', status: 'Complete' },
                { date: 'Dec 18', clockIn: '09:15 AM', clockOut: '05:45 PM', hours: '8:30', status: 'Complete' },
                { date: 'Dec 17', clockIn: '08:45 AM', clockOut: '05:15 PM', hours: '8:30', status: 'Complete' },
              ].map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.clockIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.clockOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.hours}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      record.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClockIn;