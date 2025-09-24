# Mental Health After-Care System

A web-based application designed to support mental health patients and their families during the post-discharge period. This system facilitates regular monitoring of key wellness parameters and provides a structured feedback mechanism between patients and their family caregivers.

## 🎯 Purpose

After discharge from mental health treatment, consistent monitoring and family support are crucial for successful recovery. This system addresses that need by providing:

- **Regular Check-ins**: Daily wellness parameter tracking
- **Family Engagement**: Structured way for family members to monitor and support patients
- **Progress Visualization**: Clear insights into recovery patterns
- **Documentation**: Historical tracking of care and progress

## 📋 Key Features

### For Family Members/Caregivers:
- **Daily Care Checklist** with key monitoring parameters:
  - Sleep quality assessment (7+ hours, 5-7 hours, <5 hours)
  - Outdoor activity tracking (Yes/No)
  - Medication adherence monitoring (All taken, Some missed, None taken)
  - Social interaction assessment (Engaged, Minimal, Avoided)
  - Mood/energy level tracking (Positive/Stable, Neutral, Concerning/Low)
  - Additional notes and observations

### For Patients:
- **Progress Dashboard** showing:
  - Latest care report summary
  - Weekly progress statistics
  - Medication compliance tracking
  - Activity pattern insights

### System Features:
- **Data Persistence**: Local storage of all care reports
- **History Viewing**: Complete timeline of care reports
- **Mobile Responsive**: Works on phones, tablets, and desktop
- **User-Friendly**: Simple interface designed for all age groups
- **Privacy-First**: All data stored locally on the user's device

## 🚀 Getting Started

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Choose Your Role**: Select whether you are a "Patient" or "Family Member"
3. **Start Tracking**: Family members can begin submitting daily care reports

## 📊 Monitoring Parameters

The system tracks these essential wellness indicators:

| Parameter | Options | Purpose |
|-----------|---------|---------|
| **Sleep Quality** | Good (7+ hrs), Fair (5-7 hrs), Poor (<5 hrs) | Monitor sleep patterns crucial for mental health |
| **Outdoor Activity** | Yes/No | Track engagement with outside environment |
| **Medication Adherence** | All taken, Some missed, None taken | Ensure treatment compliance |
| **Social Interaction** | Engaged, Minimal, Avoided | Monitor social withdrawal patterns |
| **Mood/Energy** | Positive/Stable, Neutral, Concerning/Low | Track emotional state changes |

## 💡 Use Case Example

**Scenario**: A patient diagnosed with depression has been discharged from treatment.

**Family Member Workflow**:
1. Access the system each evening
2. Fill out the daily checklist based on observations
3. Note any concerning patterns or behaviors
4. Submit the report for tracking

**Patient Workflow**:
1. Review their progress dashboard
2. See weekly trends and improvements
3. Identify areas needing attention
4. Discuss patterns with healthcare providers

## 🔒 Privacy & Security

- **Local Storage**: All data is stored on the user's device only
- **No Server Communication**: No data is transmitted to external servers
- **Device-Specific**: Data remains on the device where it was entered
- **User Control**: Users can clear data anytime through browser settings

## 🛠 Technical Requirements

- **Browser**: Any modern web browser (Chrome, Firefox, Safari, Edge)
- **Internet**: Not required after initial page load
- **Storage**: Minimal local storage space needed
- **Platform**: Works on desktop, tablet, and mobile devices

## 📱 Mobile Usage

The application is fully responsive and optimized for mobile devices, making it easy for family members to complete daily check-ins from anywhere.

## 🔄 Data Export

Currently, data is stored locally. For backup or sharing with healthcare providers, users can:
1. Take screenshots of the history view
2. Manually transcribe key metrics
3. Use browser developer tools to export localStorage data

## 🎨 Customization

The system can be easily customized for different mental health conditions by modifying the monitoring parameters in the HTML and JavaScript files.

## 📞 Support

This is a demonstration system. For production use, consider consulting with mental health professionals to customize parameters for specific conditions and treatment plans.

---

**Remember**: This tool supplements but does not replace professional mental health care. Always consult healthcare providers for medical decisions. 
