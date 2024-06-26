import { useCallback, useState } from "react";
import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
