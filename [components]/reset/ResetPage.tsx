"use client"
import Input from '../input/Input';
import Button from '../button/Button';
import useResetPage from './useResetPage';

export default function ResetPage() {
      const {
        currentPassword,
        SetCurrentPassword,
        newPassword,
        SetNewPassword,
        confirmPassword,
        SetConfirmPassword,
        handlePasswordReset,
      } = useResetPage()
  return (
    <div className="flex flex-col">
      <Input
        type="password"
        placeholder="   Current Password"
        value={currentPassword}
        onChange={(e) => SetCurrentPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   New Password"
        value={newPassword}
        onChange={(e) => SetNewPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="   Confirm New Passward"
        value={confirmPassword}
        onChange={(e) => SetConfirmPassword(e.target.value)}
      />
      <Button name="Reset" onClick={handlePasswordReset} />
    </div>
  );
}
