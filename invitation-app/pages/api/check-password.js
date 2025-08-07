import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcrypt'

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	const { password } = req.body
	if (!password) {
		return res.status(400).json({ error: 'Password is required' })
	}

	const { data, error } = await supabase
		.from('shared_passwords')
		.select('password_hash')
		.limit(1)
		.single()

	if (error || !data) {
		return res.status(500).json({ error: 'Could not fetch password hash' })
	}

	const isValid = await bcrypt.compare(password, data.password_hash)

	if (isValid) {
		return res.status(200).json({ valid: true })
	} else {
		return res.status(401).json({ valid: false, error: 'Invalid password' })
	}
}
