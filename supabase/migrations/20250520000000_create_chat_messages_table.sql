
-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  sender TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create index on timestamp for faster queries when filtering by date
CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp ON chat_messages(timestamp);

-- Add RLS policies
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert, select, and update their own messages
CREATE POLICY "Allow anyone to insert chat messages" ON chat_messages
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anyone to select chat messages" ON chat_messages
  FOR SELECT TO anon
  USING (true);
