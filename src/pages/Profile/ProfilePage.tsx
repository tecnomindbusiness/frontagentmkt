import PersonalInfo from './PersonalInfo';
import NotificationSettings from './NotificationSettings';
import SecuritySettings from './SecuritySettings';

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-gray-400 mt-2">Manage your account preferences</p>
      </div>

      <div className="grid gap-8">
        <PersonalInfo />
        <NotificationSettings />
        <SecuritySettings />
      </div>
    </div>
  );
}
